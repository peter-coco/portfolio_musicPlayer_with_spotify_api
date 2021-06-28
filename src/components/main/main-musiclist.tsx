import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalState, Music } from "../../redux/reducer";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../useAuth";
import Actions from "../../redux/actions";

const MainMusicListWrap = styled.div`
  width: 100%;
  height: 80%;
  grid-template-columns: 1fr 1fr;
  overflow-y: scroll;
  /* overflow-x: hidden; */

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const MainMusicList = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  align-items: center;
  margin-right: 30px;
  @media (max-width: 750px) {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    margin-right: 0%;
  }
  @media (max-width: 350px) {
    height: 35px;
    margin-bottom: 15px;
  }
`;
const MainMusicListImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  @media (max-width: 750px) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
  @media (max-width: 350px) {
    width: 35px;
    height: 35px;
    margin-right: 15px;
  }
`;
const MainMusicListSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainMusicListTitle = styled.div`
  color: #fff;
  font-size: 18px;
  /* width: 300px; */

  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 750px) {
    font-size: 15px;
    width: 220px;
  }

  @media (max-width: 350px) {
    font-size: 13px;
    width: 150px;
  }
`;
const MainMusicListArtistNAlbum = styled.div`
  color: #cacaca;
  font-size: 18px;

  width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /* width: 100%; */
  @media (max-width: 750px) {
    font-size: 15px;
    width: 220px;
  }

  @media (max-width: 350px) {
    font-size: 13px;
    width: 150px;
  }
`;

const MainMusicSubFunctions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: absolute;
  background-color: #1b1b1b;
  width: 80%;
  height: 100%;
  opacity: 0;
  &:hover {
    opacity: 0.5;
  }
`;

const MainMusicSubFunc = styled.i`
  font-size: 20px;
  color: #fff;
  line-height: 30px;
  cursor: pointer;

  &:hover {
    color: #975f31;
  }
  @media (max-width: 750px) {
    font-size: 15px;
    margin-left: 20px;
    /* line-height: 30px; */
  }

  @media (max-width: 350px) {
    font-size: 10px;
  }
`;

const MainMusicLists = ({ track }: { track: Music }) => {
  const dispatch = useDispatch();
  const [spotifyApi, myListId, playingListId] = useSelector<
    GlobalState,
    [SpotifyWebApi, string, string]
  >((state) => [state.spotifyApi, state.myListId, state.playingListId]);

  return (
    <MainMusicList>
      <MainMusicListImg src={track.albumImg} />
      <MainMusicListSubscription>
        <MainMusicListTitle>{track.title}</MainMusicListTitle>
        <MainMusicListArtistNAlbum>
          {track.artist} / {track.album}
        </MainMusicListArtistNAlbum>
      </MainMusicListSubscription>
      <MainMusicSubFunctions>
        <MainMusicSubFunc
          className="fas fa-play"
          onClick={() => {
            dispatch({
              type: Actions.CHOICE_PLAY_MUSIC_NOW,
              payload: { trackNow: track },
            });
          }}
        />
        <MainMusicSubFunc className="fas fa-thumbs-up" />
        <MainMusicSubFunc
          className="fas fa-plus"
          onClick={() => {
            if (!myListId) return;
            spotifyApi
              .addTracksToPlaylist(myListId, [track.url])
              .then((res) => {
                dispatch({
                  type: Actions.SET_ADD_MUSIC_TO_MYLIST,
                });
              });
          }}
        />
        <MainMusicSubFunc
          className="fas fa-minus"
          onClick={() => {
            if (!myListId) return;
            spotifyApi
              .removeTracksFromPlaylist(myListId, [{ uri: track.url }])
              .then((res) => {
                dispatch({ type: Actions.SET_SUB_MUSIC_FROM_MYLIST });
              });
          }}
        />
      </MainMusicSubFunctions>
    </MainMusicList>
  );
};

export const MainRecommandedList = () => {
  const dispatch = useDispatch();
  const [
    entraceCode,
    selectedMusicGenre,
    searchResult,
    searchBarEnterOnOff,
    trackList,
    mainModeIdx,
    spotifyApi,
    myListId,
    addMusicToMylist,
    subMusicFromMylist,
  ] = useSelector<
    GlobalState,
    [
      string,
      string,
      string,
      boolean,
      Music[],
      number,
      SpotifyWebApi,
      string,
      boolean,
      boolean
    ]
  >((state) => [
    state.entraceCode,
    state.selectedMusicGenre,
    state.searchResult,
    state.searchBarEnterOnOff,
    state.trackList,
    state.mainContentsModeIdx,
    state.spotifyApi,
    state.myListId,
    state.addMusicToMylist,
    state.subMusicFromMylist,
  ]);

  const accessToken = useAuth(entraceCode);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    dispatch({
      type: Actions.SET_ACCEES_TOKEN_NOW,
      payload: { accessTokenNow: accessToken },
    });
  }, [accessToken]);

  useEffect(() => {
    if (!searchResult) return;
    // console.log("HIHI");
    if (mainModeIdx !== 3) return;

    spotifyApi.searchTracks(searchResult).then((res) => {
      const list = res.body.tracks?.items.map((track) => {
        return {
          title: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          albumImg: track.album.images[0].url,
          popularity: track.popularity,
          url: track.uri,
        };
      }); // ?를 추가하는거는?? undefined가 있을수도 있다는 의미??
      dispatch({
        type: Actions.SET_TRACK_LIST,
        payload: { trackList: list ? list : [] },
      });
    });
  }, [searchBarEnterOnOff]);

  useEffect(() => {
    // console.log(mainModeIdx);
    if (!myListId) return;
    if (mainModeIdx !== 2) return;
    spotifyApi.getPlaylist(myListId).then((res) => {
      const list = res.body.tracks.items.map((track) => {
        return {
          title: track.track.name,
          artist: track.track.artists[0].name,
          album: track.track.album.name,
          albumImg: track.track.album.images[0].url,
          popularity: track.track.popularity,
          url: track.track.uri,
        };
      });
      dispatch({
        type: Actions.SET_TRACK_LIST,
        payload: { trackList: list ? list : [] },
      });
    });
  }, [myListId, mainModeIdx, addMusicToMylist, subMusicFromMylist]);

  useEffect(() => {
    if (!accessToken) return;
    // Create a private playlist
    spotifyApi
      .createPlaylist("My playlist", {
        description: "My favorite music list",
      })
      .then((res) => {
        dispatch({
          type: Actions.SET_MYLIST_ID,
          payload: { myListId: res.body.id },
        });
      });

    // Create a playing list what i listened once
    spotifyApi
      .createPlaylist("playing now list", {
        description: "My playlist what i listened once",
      })
      .then((res) => {
        dispatch({
          type: Actions.SET_PLAYING_NOW_LIST_ID,
          payload: res.body.id,
        });
      });
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    if (mainModeIdx !== 0) return;

    // 검색을 하고나서 다시 여기를 했을 때 잘 안먹히네...??
    spotifyApi
      .getRecommendations({
        seed_genres: [`${selectedMusicGenre}`],
      })
      .then((res) => {
        const list = (res.body.tracks as SpotifyApi.TrackObjectFull[]).map(
          (track) => {
            return {
              title: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              albumImg: track.album.images[0].url,
              popularity: track.popularity,
              url: track.uri,
            };
          }
        ); // ?를 추가하는거는?? undefined가 있을수도 있다는 의미??
        // setSearchResults(list ? list : []);
        dispatch({
          type: Actions.SET_TRACK_LIST,
          payload: { trackList: list ? list : [] },
        });
      });
  }, [selectedMusicGenre, accessToken, mainModeIdx]);

  return (
    <MainMusicListWrap
      style={{
        display: mainModeIdx !== 1 ? "grid" : "none",
      }}
    >
      {trackList
        .sort((a, b) => {
          return b.popularity - a.popularity;
        })
        .map((track) => (
          <MainMusicLists
            key={track.title + track.artist + track.album + track.url}
            track={track}
          />
        ))}
    </MainMusicListWrap>
  );
};

// type C = {
//   a:number;
// }

// type D = {
//   a:number;
//   b:number;
// }

// let c:any = {
//   a:5,
//   b:7
// }

// let d:C =  c;

// console.log((d as D).b)  // 확신이 있을 때 !!
