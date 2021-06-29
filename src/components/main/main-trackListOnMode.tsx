import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalState, Music } from "../../redux/reducer";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../utils/useAuth";
import Actions from "../../redux/actions";
import { MainMusicLists } from "./main-tracklist";

const MainMusicListWrap = styled.div`
  width: 100%;
  height: 80%;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  grid-template-rows: repeat(auto-fill, minmax(20%, auto));
  overflow-y: scroll;
  /* overflow-x: hidden; */

  @media (max-width: 750px) {
    grid-template-rows: repeat(auto-fill, minmax(20%, auto));
  }
`;

export const MainTrackListOnMode = () => {
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
