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

  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  /* grid-template-rows: repeat(auto-fill, minmax(20%, auto)); */
  /* grid-template-rows: 1fr; */

  @media (max-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 0px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
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
  ] = useSelector<
    GlobalState,
    [string, string, string, boolean, Music[], number, SpotifyWebApi]
  >((state) => [
    state.entraceCode,
    state.selectedMusicGenre,
    state.searchResult,
    state.searchBarEnterOnOff,
    state.trackList,
    state.mainContentsModeIdx,
    state.spotifyApi,
  ]);

  const accessToken = useAuth(entraceCode);

  // console.log(accessToken);
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
    if (!accessToken) return;
    if (mainModeIdx === 1 || mainModeIdx === 3) return;

    // 검색을 하고나서 다시 여기를 했을 때 잘 안먹히네...??

    spotifyApi
      .getRecommendations({
        seed_genres: [`${selectedMusicGenre}`],
      })
      .then((res) => {
        const list = (res.body.tracks as SpotifyApi.TrackObjectFull[]).map(
          (track) => {
            // console.log(track.album.images[0].url);
            return {
              title: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              albumImg: track.album.images[0].url
                ? track.album.images[0].url
                : "",
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

  useEffect(() => {
    const resetMusicListScroll = document.getElementById("musicList");
    if (resetMusicListScroll) resetMusicListScroll.scrollTop = 0;
    console.log(mainModeIdx);
  }, [selectedMusicGenre, mainModeIdx]);

  return (
    <MainMusicListWrap
      id="musicList"
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
