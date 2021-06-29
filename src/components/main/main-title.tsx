import styled from "styled-components";

const MainContentsTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 60px;
  margin-bottom: 10px;
  @media (max-width: 750px) {
    width: 280px;
    height: 40px;
    margin-bottom: 35px;
  }

  @media (max-width: 350px) {
    width: 250px;

    margin-bottom: 20px;
  }
`;

const MainContentsTitleText = styled.div`
  color: #fff;
  font-size: 25px;
  @media (max-width: 750px) {
    font-size: 20px;
  }

  @media (max-width: 350px) {
    font-size: 18px;
  }
`;

const MainContentsTitleUnderbar = styled.div`
  width: 100%;
  height: 4px;

  @media (max-width: 750px) {
    height: 3px;
    width: 90%;
  }

  @media (max-width: 350px) {
    width: 80%;
    height: 2px;
  }
`;

export const Maintitle = ({
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
