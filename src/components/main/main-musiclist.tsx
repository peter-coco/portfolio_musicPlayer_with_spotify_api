import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalState, Music } from "../../redux/reducer";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../useAuth";
import Actions from "../../redux/actions";

// export enum SortType {
//   TITLES,
//   ARTISTS,
//   ALBUMS,
//   POPULARITY,
// }

export const spotifyApi = new SpotifyWebApi({
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

export function MainRecommandedList() {
  const dispatch = useDispatch();
  const entraceCode = useSelector<GlobalState, string>(
    (state) => state.entraceCode
  );
  const selectedMusicGenre = useSelector<GlobalState, string>(
    (state) => state.selectedMusicGenre
  );
  const searchResult = useSelector<GlobalState, string>(
    (state) => state.searchResult
  );
  const searchBarEnterOnOff = useSelector<GlobalState, boolean>(
    (state) => state.searchBarEnterOnOff
  );
  const trackList = useSelector<GlobalState, Music[]>(
    (state) => state.trackList
  );
  // console.log(`entrace code : ${entraceCode}`);
  // console.log(`code : ${code}`);
  const accessToken = useAuth(entraceCode);
  // const [search, setSearch] = useState<string>("a");
  // const [searchResults, setSearchResults] = useState<Music[]>([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
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
    // if (!search) return setSearchResults([]);
    if (!accessToken) return;
    spotifyApi.getAvailableGenreSeeds().then(
      function (data) {
        let genreSeeds = data.body;
        console.log(genreSeeds);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );

    spotifyApi
      .getRecommendations({
        // min_energy: 0.4,
        // seed_artists: ["6mfK6Q2tzLMEchAr0e9Uzu", "4DYFVNKZ1uixa6SQTvzQwJ"],
        seed_genres: [`${selectedMusicGenre}`],
        // min_popularity: 1,
      })
      .then((res) => {
        // console.log(res.body.tracks[0]);
        const list = res.body.tracks.map((track) => {
          return {
            title: track.name,
            artist: track.artists[0].name,
            album: "track.album.name",
            albumImg: "track.album.images[0].url,",
            popularity: 30,
          };
        }); // ?를 추가하는거는?? undefined가 있을수도 있다는 의미??
        // setSearchResults(list ? list : []);
        dispatch({
          type: Actions.SET_TRACK_LIST,
          payload: { trackList: list ? list : [] },
        });
      });
  }, [selectedMusicGenre, accessToken]);

  const mainModeIdx = useSelector<GlobalState>(
    (state) => state.mainContentsModeIdx
  );

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
            albumCover={e.albumImg}
            songTitle={e.title}
            artist={e.artist}
            albumTitle={e.album}
          />
        ))}
    </MainMusicListWrap>
  );
}
