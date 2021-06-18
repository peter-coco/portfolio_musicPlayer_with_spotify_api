import { useSelector } from "react-redux";
import styled from "styled-components";
import playingMusicImg from "../../image/main-logo.png";
import { GlobalState } from "../../redux/reducer";

const MainPlayingListWrap = styled.div`
  display: flex;
  gap: 100px;
`;
const MusiclistWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
`;
const MusicListTop = styled.div`
  display: flex;
  width: 100%;
`;
const MusicListTopTitle = styled.div`
  width: 50%;
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
const MusiclistBottom = styled.div``;
const PlayingMusicImg = styled.img`
  width: 400px;
  height: 400px;
`;

function MusicList() {
  return <div></div>;
}

function MusiclistNLyric() {
  const [a, b] = useSelector<GlobalState, [string, number]>((state) => [
    state.a,
    state.b,
  ]);
  return (
    <MusiclistWrap>
      <MusicListTop>
        <MusicListTopTitle>playList{a}</MusicListTopTitle>
        <MusicListTopTitle>lyric</MusicListTopTitle>
      </MusicListTop>
      <MusiclistBottom>
        <MusicList />
      </MusiclistBottom>
    </MusiclistWrap>
  );
}

export function MainPlayingList() {
  return (
    <MainPlayingListWrap>
      <PlayingMusicImg src={playingMusicImg} />
      <MusiclistNLyric />
    </MainPlayingListWrap>
  );
}
