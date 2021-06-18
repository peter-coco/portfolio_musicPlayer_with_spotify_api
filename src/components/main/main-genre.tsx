import styled from "styled-components";
import { useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducer";

const MainGenreWrap = styled.div`
  width: 100%;
  height: 80%;
  /* display: flex; */
  flex-wrap: wrap;
`;

const MainGenreList = styled.div`
  width: 250px;
  height: 50px;
  background-color: #1b1b1b;
  color: #fff;
  margin-right: 50px;
  text-align: center;
  line-height: 50px;
`;

function MainGenreLists({ musicGenre }: { musicGenre: string }) {
  return <MainGenreList>{musicGenre}</MainGenreList>;
}

export function MainGenre() {
  const genreLists = [
    "K-pop",
    "pop",
    "J-pop",
    "rock",
    "classic",
    "jazz",
    "ballad",
    "Edm",
    "Etc",
  ];

  const mainModeIdx = useSelector<GlobalState>(
    (state) => state.mainContentsModeIdx
  );

  return (
    <MainGenreWrap style={{ display: mainModeIdx === 1 ? "flex" : "none" }}>
      {genreLists.map((musicGenre) => (
        <MainGenreLists key={musicGenre} musicGenre={musicGenre} />
      ))}
    </MainGenreWrap>
  );
}
