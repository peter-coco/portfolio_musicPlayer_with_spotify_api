// import { useSelector } from "react-redux";
import styled from "styled-components";
import playingMusicImg from "../../image/main-logo.png";
// import { GlobalState } from "../../redux/reducer";

import albumImg from "../../image/navbar-logo.png";

const MainPlayingListWrap = styled.div`
  display: flex;
  gap: 100px;
`;
const MusicListNLyricWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
`;
const MusicListNLyricTop = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;
const MusicListNLyricTopTitle = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  color: #fff;
  font-size: 30px;
`;

// const MusiclistBottom = styled.div<{ w: number; h: number }>`
//    부모중에 .a 가 있다면 컬러를 레드로하겠다. & : 나 자신 --> nested grammer
//   width: ${(props) => (props.w < 200 ? 200 : 100)}px;
//   .a & {
//     color: red;
//   }
//   .b {
//     color: red;
//     .c {
//       color: blue;
//     }
//   }
// `;
const MusicListNLyricBottom = styled.div`
  width: 100%;
  height: 300px;
  /* padding: 10px 20px; */
  box-sizing: border-box;
  overflow-y: scroll;
`;
const PlayingMusicImg = styled.img`
  width: 400px;
  height: 400px;
`;

const MusicList = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  display: flex;
`;
const MusicListImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 30px;
`;
const MusicListSubscription = styled.div`
  width: 80%;
  height: 60px;
`;
const MusicListSubsTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  color: #fff;
`;
const MusicListSubsEtc = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  color: #cacaca;
`;

function MusicLists({
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
    <MusicList>
      <MusicListImage src={albumCover}></MusicListImage>
      <MusicListSubscription>
        <MusicListSubsTitle>{songTitle}</MusicListSubsTitle>
        <MusicListSubsEtc>
          {artist} / {albumTitle}
        </MusicListSubsEtc>
      </MusicListSubscription>
    </MusicList>
  );
}

function MusicPlayinglistNLyric() {
  // dummy data --> 추후 api에서 데이터 받아서 전송할것임.
  const musicListdata = [
    // 제목, 가수, 앨범
    [`${albumImg}`, "yellow", "cold play", "parachutes"],
    [`${albumImg}`, "yellow", "cold play", "parachutes"],
    [`${albumImg}`, "yellow", "cold play", "parachutes"],
    [`${albumImg}`, "yellow", "cold play", "parachutes"],
  ];

  return (
    <MusicListNLyricWrap>
      <MusicListNLyricTop>
        <MusicListNLyricTopTitle>playList</MusicListNLyricTopTitle>
        <MusicListNLyricTopTitle>lyric</MusicListNLyricTopTitle>
      </MusicListNLyricTop>
      <MusicListNLyricBottom>
        {musicListdata.map(([albumCover, songTitle, artist, albumTitle]) => (
          <MusicLists
            key={songTitle}
            albumCover={albumCover}
            songTitle={songTitle}
            artist={artist}
            albumTitle={albumTitle}
          />
        ))}
      </MusicListNLyricBottom>
    </MusicListNLyricWrap>
  );
}

export function MainPlayingList() {
  return (
    <MainPlayingListWrap>
      <PlayingMusicImg src={playingMusicImg} />
      <MusicPlayinglistNLyric />
    </MainPlayingListWrap>
  );
}
