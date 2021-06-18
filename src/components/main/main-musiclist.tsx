import { useSelector } from "react-redux";
import styled from "styled-components";
import albumImg from "../../image/navbar-logo.png";
import { GlobalState } from "../../redux/reducer";

const MainMusicListWrap = styled.div`
  width: 100%;
  height: 80%;
  /* display: flex; */
  flex-wrap: wrap;
`;

const MainMusicList = styled.div`
  width: 350px;
  height: 80px;
  display: flex;
  margin-right: 30px;
`;
const MainMusicListImg = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 40px;
`;
const MainMusicListSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const MainMusicListTitle = styled.div`
  color: #fff;
  font-size: 24px;
`;
const MainMusicListArtistNAlbum = styled.div`
  color: #cacaca;
  font-size: 24px;
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
