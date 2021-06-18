import { MainGenre } from "./main-genre";
import { MainRecommandedList } from "./main-musiclist";
import { MainPlayingList } from "./main-playingList";

import styled from "styled-components";
import { GlobalState } from "../../redux/reducer";
import { useSelector } from "react-redux";

const MainWrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
`;

const MainContentsTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 60px;
  margin-bottom: 50px;
`;

const MainContentsTitleText = styled.div`
  color: #fff;
  font-size: 40px;
  margin-bottom: 0px;
`;

const MainContentsTitleUnderbar = styled.div`
  width: 100%;
  height: 5px;
`;

function Maintitle({ title, barColor }: { title: string; barColor: string }) {
  return (
    <MainContentsTitle>
      <MainContentsTitleText>{title}</MainContentsTitleText>
      <MainContentsTitleUnderbar style={{ backgroundColor: `${barColor}` }} />
    </MainContentsTitle>
  );
}

export function Main() {
  // const mode = useSelector;
  const mainModeIdx = useSelector<GlobalState, number>(
    (state) => state.mainContentsModeIdx
  );

  const titleList = ["Recommanded", "Genre", "Library"];
  const titleUnderBarColor = ["#72B1C5", "#7972C5", "#D96BC1"];

  return (
    <MainWrap>
      <MainContentsWrap>
        <Maintitle
          title={titleList[mainModeIdx]}
          barColor={titleUnderBarColor[mainModeIdx]}
        />
        <MainGenre />
        <MainRecommandedList />
      </MainContentsWrap>
      {/* <MainPlayingList /> */}
    </MainWrap>
  );
}
