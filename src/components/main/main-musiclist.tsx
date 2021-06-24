import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalState, Music } from "../../redux/reducer";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../useAuth";
import Actions from "../../redux/actions";
import axios from "axios";

export const spotifyApi = new SpotifyWebApi({
  clientId: "e4ef76d98ff348cfbe2fe41f11d87279",
  clientSecret: "eabebe089db44942bc912940c398c29a",
  redirectUri: "http://localhost:3000",
});

const MainMusicListWrap = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  /* flex-wrap: wrap; */
  /* gap: 0px; */

  overflow: scroll;

  @media (max-width: 750px) {
    flex-direction: column;
    /* align-items: center; */
  }
`;

const MainMusicList = styled.div`
  width: 300px;
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
  font-size: 20px;
  @media (max-width: 750px) {
    font-size: 15px;
  }

  @media (max-width: 350px) {
    font-size: 13px;
  }
`;
const MainMusicListArtistNAlbum = styled.div`
  color: #cacaca;
  font-size: 20px;
  /* width: 100%; */
  @media (max-width: 750px) {
    font-size: 15px;
  }

  @media (max-width: 350px) {
    font-size: 13px;
  }
`;

const MainMusicSubFunctions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #1b1b1b;
  width: 300px;
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

const MainMusicLists = ({
  track,
  albumCover,
  songTitle,
  artist,
  albumTitle,
}: {
  track: Music;
  albumCover: any;
  songTitle: string;
  artist: string;
  albumTitle: string;
}) => {
  const dispatch = useDispatch();
  return (
    <MainMusicList>
      <MainMusicListImg src={albumCover} />
      <MainMusicListSubscription>
        <MainMusicListTitle>{songTitle}</MainMusicListTitle>
        <MainMusicListArtistNAlbum>
          {artist} / {albumTitle}
        </MainMusicListArtistNAlbum>
      </MainMusicListSubscription>
      <MainMusicSubFunctions>
        <MainMusicSubFunc
          className="fas fa-play"
          onClick={() =>
            dispatch({
              type: Actions.CHOICE_PLAY_MUSIC_NOW,
              payload: { trackNow: track },
            })
          }
        />
        <MainMusicSubFunc className="fas fa-thumbs-up" />
        <MainMusicSubFunc className="fas fa-ellipsis-v list-ellipsis" />
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
  ] = useSelector<
    GlobalState,
    [string, string, string, boolean, Music[], number]
  >((state) => [
    state.entraceCode,
    state.selectedMusicGenre,
    state.searchResult,
    state.searchBarEnterOnOff,
    state.trackList,
    state.mainContentsModeIdx,
  ]);

  // console.log(`entrace code : ${entraceCode}`);
  // console.log(`code : ${code}`);
  const accessToken = useAuth(entraceCode);
  // spotifyApi.setAccessToken(accessToken);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    dispatch({
      type: Actions.SET_ACCEES_TOKEN_NOW,
      payload: { accessTokenNow: accessToken },
    });
    // setPassedCode(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!searchResult) return;
    // console.log(trackList);
    console.log(searchResult);
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
      // console.log(trackList, list);
    });
  }, [searchBarEnterOnOff]);

  useEffect(() => {
    if (!accessToken) return;
    console.log("IN?", accessToken);

    // spotifyApi.getUserPlaylists("My playlist").then(
    //   function (data) {
    //     console.log("Retrieved playlists", data.body);
    //   },
    //   function (err) {
    //     console.log("Something went wrong!", err);
    //   }
    // );

    // Create a private playlist
    // spotifyApi
    //   .createPlaylist("fjdkslafjsyydklfr", {
    //     description: "My description",
    //     // public: true,
    //   })
    //   .then(
    //     function (data) {
    //       console.log("Created playlist!");
    //     },
    //     function (err) {
    //       console.log("Something went wrong!", err);
    //     }
    //   );
    async function t() {
      const user_id = "cng5x2n87deht9u25pqbiunn2";

      const { data } = await axios.post(
        `https://api.spotify.com/v1/users/${user_id}/playlists`,
        { name: "test" },
        {
          headers: {
            authorization:
              "Bearer " +
              "BQAsxyDNBnnbUD-oRn01z5XAL9Vj6NcaIgb1MqUrCuweHoBKxXmTAGW-2QiwGktWNqVt2wgAKDiMZLIJwHsF73Bo_YV1YU8HZEtGQV0F4Gv5PSyzLMqdHqIe6MpD4XxCq63ZQw-pTyNtvMq3J3Qqfo9csdyJJ8318NQY9TA4JhNnWIpj3_49Xf1yW5e6MfgpycDEd4RlZ0yocZV-wYVKZV5fWChwfW7H",
          },
        }
      );
      console.log("hello", data);
    }
    t();
    // spotifyApi
    //   .addTracksToPlaylist("5ieJqeLJjjI8iJWaxeBLuK", [
    //     "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",
    //     "spotify:track:1301WleyT98MSxVHPZCA6M",
    //   ])
    //   .then(
    //     function (data) {
    //       console.log("Added tracks to playlist!");
    //     },
    //     function (err) {
    //       console.log("Something went wrong!", err);
    //     }
    //   );
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    // spotifyApi.getAvailableGenreSeeds().then(
    //   function (data) {
    //     let genreSeeds = data.body;
    //     console.log(genreSeeds);
    //   },
    //   function (err) {
    //     console.log("Something went wrong!", err);
    //   }
    // );

    // 검색을 하고나서 다시 여기를 했을 때 잘 안먹히네...??
    spotifyApi
      .getRecommendations({
        seed_genres: [`${selectedMusicGenre}`],
      })
      .then((res) => {
        console.log(res.body.tracks[0]);
        const list = (res.body.tracks as SpotifyApi.TrackObjectFull[]).map(
          (track) => {
            return {
              title: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              albumImg: track.album.images[0].url,
              popularity: 30,
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
  }, [selectedMusicGenre, accessToken]);

  return (
    <MainMusicListWrap style={{ display: mainModeIdx === 0 ? "flex" : "none" }}>
      {trackList
        // .filter()
        .sort((a, b) => {
          return b.popularity - a.popularity;
        })
        .map((e) => (
          <MainMusicLists
            key={e.title + e.artist + e.album}
            track={e}
            albumCover={e.albumImg}
            songTitle={e.title}
            artist={e.artist}
            albumTitle={e.album}
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
