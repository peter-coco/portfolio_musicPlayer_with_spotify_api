import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducer";
import Actions from "../../redux/actions";

const MainGenreWrap = styled.div`
  width: 100%;
  height: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  overflow-y: scroll;

  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MainGenreList = styled.div`
  width: 200px;
  height: 50px;
  background-color: #1b1b1b;
  color: #fff;
  /* margin-right: 50px; */
  text-align: center;
  line-height: 50px;
  font-size: 16px;

  cursor: pointer;
  @media (max-width: 750px) {
    width: 130px;
    height: 40px;
    line-height: 40px;
    font-size: 15px;

    /* margin-right: 30px; */
  }

  @media (max-width: 350px) {
    width: 100px;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
  }
`;

const MainGenreLists = ({ musicGenre }: { musicGenre: string }) => {
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
};

export const MainGenre = () => {
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
    <MainGenreWrap style={{ display: mainModeIdx === 1 ? "grid" : "none" }}>
      {genreLists.map((musicGenre) => (
        <MainGenreLists key={musicGenre} musicGenre={musicGenre} />
      ))}
    </MainGenreWrap>
  );
};
