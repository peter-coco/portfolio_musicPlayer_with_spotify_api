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
  padding: 0 20px;
  box-sizing: border-box;
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
  @media (max-width: 750px) {
    width: 200px;
    height: 40px;
    margin-bottom: 35px;
  }

  @media (max-width: 350px) {
    margin-bottom: 20px;
  }
`;

const MainContentsTitleText = styled.div`
  color: #fff;
  font-size: 40px;
  margin-bottom: 0px;
  @media (max-width: 750px) {
    font-size: 25px;
  }

  @media (max-width: 350px) {
    font-size: 20px;
  }
`;

const MainContentsTitleUnderbar = styled.div`
  width: 100%;
  height: 5px;

  @media (max-width: 750px) {
    height: 3px;
  }

  @media (max-width: 350px) {
    height: 2px;
  }
`;

const Maintitle = ({
  title,
  barColor,
}: {
  title: string;
  barColor: string;
}) => {
  return (
    <MainContentsTitle>
      <MainContentsTitleText>{title}</MainContentsTitleText>
      <MainContentsTitleUnderbar style={{ backgroundColor: `${barColor}` }} />
    </MainContentsTitle>
  );
};

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
        <MainRecommandedList />
      </MainContentsWrap>
      {/* <MainPlayingList /> */}
    </MainWrap>
  );
};
