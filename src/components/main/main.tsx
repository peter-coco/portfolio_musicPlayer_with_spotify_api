import { MainGenre } from "./main-genre";
import { MainTrackListOnMode } from "./main-trackListOnMode";
import { Maintitle } from "./main-title";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducer";

const MainWrap = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
`;

const MainContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
`;

export const Main = () => {
  const [nameOfTitle, colorOfTitleBar] = useSelector<
    GlobalState,
    [string, string]
  >((state) => [state.nameOfTitle, state.colorOfTitleBar]);

  return (
    <MainWrap>
      <MainContentsWrap>
        <Maintitle title={nameOfTitle} barColor={colorOfTitleBar} />
        <MainGenre />
        <MainTrackListOnMode />
      </MainContentsWrap>
    </MainWrap>
  );
};
