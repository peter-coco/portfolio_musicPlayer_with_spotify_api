import { MainGenre } from "./main-genre";
import { MainMusicList } from "./main-musiclist";
import { MainPlayingList } from "./main-playingList";

import styled from "styled-components";

const MainWrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Maintitle({ title }: { title: string }) {
  return (
    <div id="main-title">
      <div className="main-title-text">{title}</div>
      <div className="main-title-underbar"></div>
    </div>
  );
}

export function Main() {
  return (
    <MainWrap>
      {/* <Maintitle title="Genre" />
      <MainGenre />
      <MainMusicList /> ggg  */}
      <MainPlayingList />
    </MainWrap>
  );
}
