import styled from "styled-components";
import playingMusicImg from "../../image/main-logo.png";

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
const MusiclistBottom = styled.div``;
const PlayingMusicImg = styled.img`
  width: 400px;
  height: 400px;
`;

function MusicList() {
  return <div></div>;
}

function MusiclistNLyric() {
  return (
    <MusiclistWrap>
      <MusicListTop>
        <MusicListTopTitle>playList</MusicListTopTitle>
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
