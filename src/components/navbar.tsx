import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Actions from "../redux/actions";
import { GlobalState } from "../redux/reducer";

const NavbarWrap = styled.div`
  width: 100%;
  height: 10vh;
  min-height: 60px;
  /* position: absolute; */
  /* top: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarMenusWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 560px;
  height: 30px;
  @media (max-width: 750px) {
    width: 200px;
  }
`;

const NavbarMenu = styled.i`
  font-size: 25px;
  line-height: 30px;
  color: #fff;
  cursor: pointer;
  @media (max-width: 750px) {
    font-size: 20px;
  }
  @media (max-width: 350px) {
    font-size: 15px;
  }
`;

const NavbarSearchBarWrap = styled.div`
  width: 560px;
  height: 30px;
`;

const NavbarSearchBarEnter = styled.i`
  width: 30px;
  height: 30px;
`;
const NavbarSearchBarInput = styled.input`
  width: 400px;
  height: 100%;
`;

const NavbarMenus = () => {
  const mainModeIdx = useSelector<GlobalState>(
    (state) => state.mainContentsModeIdx
  );
  const dispatch = useDispatch();

  return (
    <NavbarMenusWrap>
      <NavbarMenu
        className="fas fa-home"
        onClick={() => {
          // dispatch({
          //   type: Actions.CHANGE_MAIN_CONTENTS_MODE,
          //   payload: {
          //     modeNum: 0,
          //     colorOfTitleBar: "#72B1C5",
          //     nameOfTitle: "Recommand",
          //   },
          // });
          dispatch({
            type: Actions.CHOICE_MUSIC_GENRE,
            payload: {
              musicGenre: "pop",
              nameOfTitle: "Recommand",
              colorOfTitleBar: "#72B1C5",
            },
          });
        }}
      />
      <NavbarMenu
        className="fas fa-chart-bar"
        onClick={() => {
          dispatch({
            type: Actions.CHANGE_MAIN_CONTENTS_MODE,
            payload: {
              modeNum: 1,
              colorOfTitleBar: "#7972C5",
              nameOfTitle: "Genre",
            },
          });
        }}
      />
      <NavbarMenu
        className="fas fa-list-alt"
        onClick={() => {
          dispatch({
            type: Actions.CHANGE_MAIN_CONTENTS_MODE,
            payload: {
              modeNum: 2,
              colorOfTitleBar: "#D96BC1",
              nameOfTitle: "MyPlayList",
            },
          });
        }}
      />
      <NavbarMenu
        className="fas fa-search"
        onClick={() => {
          dispatch({
            type: Actions.SET_SEARCH_MODE_ONOFF,
          });
        }}
      />
    </NavbarMenusWrap>
  );
};

const NavbarSearchBar = () => {
  return (
    <NavbarSearchBarWrap>
      <NavbarSearchBarEnter />
      <NavbarSearchBarInput />
    </NavbarSearchBarWrap>
  );
};

export default function Navbar() {
  // const [a, b] = useSelector<GlobalState, [string, number]>((state) => [
  //   state.a,
  //   state.b,
  // ]);
  const searchBarOnOff = useSelector<GlobalState, boolean>(
    (state) => state.searchBarOnOff
  );

  return searchBarOnOff ? (
    <NavbarWrap>
      <NavbarSearchBar />
    </NavbarWrap>
  ) : (
    <NavbarWrap>
      <NavbarMenus />
    </NavbarWrap>
  );
}
