import { useSelector } from "react-redux";
import styled from "styled-components";
import albumImg from "../../image/navbar-logo.png";
import { GlobalState } from "../../redux/reducer";

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
  // dummy data --> 추후 api에서 데이터 받아서 전송할것임.
  const musicListdata = [
    // 제목, 가수, 앨범
    [`${albumImg}`, "yellow1", "cold play", "parachutes"],
    [`${albumImg}`, "yellow2", "cold play", "parachutes"],
    [`${albumImg}`, "yellow3", "cold play", "parachutes"],
    [`${albumImg}`, "yellow4", "cold play", "parachutes"],
    [`${albumImg}`, "yellow4", "cold play", "parachutes"],
    [`${albumImg}`, "yellow4", "cold play", "parachutes"],
    [`${albumImg}`, "yellow4", "cold play", "parachutes"],
    [`${albumImg}`, "yellow4", "cold play", "parachutes"],
  ];

  const mainModeIdx = useSelector<GlobalState>(
    (state) => state.mainContentsModeIdx
  );

  return (
    <MainMusicListWrap style={{ display: mainModeIdx === 0 ? "flex" : "none" }}>
      {musicListdata.map(([albumCover, songTitle, artist, albumTitle]) => (
        <MainMusicLists
          key={songTitle + artist}
          albumCover={albumCover}
          songTitle={songTitle}
          artist={artist}
          albumTitle={albumTitle}
        />
      ))}
    </MainMusicListWrap>
  );
}
