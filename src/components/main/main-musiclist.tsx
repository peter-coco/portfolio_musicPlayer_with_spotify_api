import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import albumImg from "../../image/navbar-logo.png";
import { GlobalState } from "../../redux/reducer";

import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../useAuth";

export interface Music {
  title: string;
  artist: string;
  album: string;
  albumImg: string;
}

const spotifyApi = new SpotifyWebApi({
  clientId: "e4ef76d98ff348cfbe2fe41f11d87279",
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

function MainMusicLists({
  albumCover,
  songTitle,
  artist,
  albumTitle,
}: {
  albumCover: any;
  songTitle: string;
  artist: string;
  albumTitle: string;
}) {
  return (
    <MainMusicList>
      <MainMusicListImg src={albumCover} />
      <MainMusicListSubscription>
        <MainMusicListTitle>{songTitle}</MainMusicListTitle>
        <MainMusicListArtistNAlbum>
          {artist} / {albumTitle}
        </MainMusicListArtistNAlbum>
      </MainMusicListSubscription>
    </MainMusicList>
  );
}

export function MainRecommandedList({ code }: { code: string }) {
  // dummy data --> 추후 api에서 데이터 받아서 전송할것임.
  // const musicListdata = [
  //   // 제목, 가수, 앨범
  //   [`${albumImg}`, "yellow1", "cold play", "parachutes"],
  //   [`${albumImg}`, "yellow2", "cold play", "parachutes"],
  //   [`${albumImg}`, "yellow3", "cold play", "parachutes"],
  //   [`${albumImg}`, "yellow4", "cold play", "parachutes"],
  //   [`${albumImg}`, "yellow4", "cold play", "parachutes"],
  //   [`${albumImg}`, "yellow4", "cold play", "parachutes"],
  //   [`${albumImg}`, "yellow4", "cold play", "parachutes"],
  //   [`${albumImg}`, "yellow4", "cold play", "parachutes"],
  // ];

  const accessToken = useAuth(code);
  const [search, setSearch] = useState<string>("yellow");
  const [searchResults, setSearchResults] = useState<Music[]>([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((res) => {
      console.log(res.body.tracks?.items);
      const list = res.body.tracks?.items.map((track) => {
        return {
          title: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          albumImg: track.album.images[0].url,
          // titile: track?.name,
          // album : track.album.
          // albumUrl: track.album.images[0],
        };
      }); // ?를 추가하는거는?? undefined가 있을수도 있다는 의미??
      setSearchResults(
        list ? list : []
        // ["a", "b", "c"]
        // res.body.tracks?.items.map((track) => track.name) // ?를 추가하는거는?? undefined가 있을수도 있다는 의미??
        // const list = res.body.tracks?.items.map((track) => track.name); // ?를 추가하는거는?? undefined가 있을수도 있다는 의미??
        // console.log(list ? list[0] : null);
        // res.body.tracks?.items.map((track) => {
        //   return {
        //     title : track.name,
        //     // artist: track.artists[0].name,
        //     // titile: track?.name,
        //     // album : track.album.
        //     // albumUrl: track.album.images[0],
        //   };
        // })
      );
    });
  }, [search, accessToken]);

  const mainModeIdx = useSelector<GlobalState>(
    (state) => state.mainContentsModeIdx
  );

  return (
    <MainMusicListWrap style={{ display: mainModeIdx === 0 ? "flex" : "none" }}>
      {searchResults.map((e) => (
        <MainMusicLists
          key={e.title + e.artist + e.album}
          albumCover={e.albumImg}
          songTitle={e.title}
          artist={e.artist}
          albumTitle={e.album}
        />
      ))}
    </MainMusicListWrap>
  );
}
