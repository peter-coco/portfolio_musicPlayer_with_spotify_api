import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducer";
import Actions from "../../redux/actions";
import { useCallback } from "react";

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
  cursor: pointer;
  @media (max-width: 750px) {
    width: 130px;
    height: 40px;
    line-height: 40px;
    margin-right: 30px;
  }
`;

function MainGenreLists({ musicGenre }: { musicGenre: string }) {
  const dispatch = useDispatch();

  return (
    <MainGenreList
      onClick={() => {
        // go to Genre music lists
        // console.log(`click genre : ${musicGenre}`);
        dispatch({
          type: Actions.CHOICE_MUSIC_GENRE,
          payload: { genre: musicGenre, nameOfTitle: musicGenre },
        });
      }}
    >
      {musicGenre}
    </MainGenreList>
  );
}

export function MainGenre() {
  const genreLists = [
    "k-pop",
    "pop",
    "j-pop",
    "rock",
    "classical",
    "jazz",
    "dance",
    "edm",
    "acoustic",
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
