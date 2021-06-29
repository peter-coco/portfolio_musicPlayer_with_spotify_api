import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Actions from "../../redux/actions";
import { GlobalState, Music } from "../../redux/reducer";
import OnOutsiceClick from "react-outclick";

const NavbarWrap = styled.div`
  width: 100%;
  height: 10vh;
  min-height: 60px;
  /* position: absolute; */
  /* top: 0; */
  position: relative;
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
  transition: all 300ms ease;

  @media (max-width: 750px) {
    font-size: 20px;
  }
  @media (max-width: 350px) {
    font-size: 15px;
  }

  &:hover {
    /* color: red; */
    transform: rotate(-30deg), scale(1.2);
  }
`;

const NavbarSearchBarWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 30px;

  @media (max-width: 750px) {
    width: 200px;
  }
`;

const NavbarSearchBarInput = styled.input`
  width: 100%;
  height: 100%;
`;

const NavbarMenus = () => {
  const dispatch = useDispatch();

  return (
    <NavbarMenusWrap>
      <NavbarMenu
        className="fas fa-home"
        onClick={() => {
          dispatch({
            type: Actions.CHANGE_MAIN_CONTENTS_MODE_TO_MAIN,
          });
        }}
      />
      <NavbarMenu
        className="fas fa-chart-bar"
        onClick={() => {
          dispatch({
            type: Actions.CHANGE_MAIN_CONTENTS_MODE_TO_GENRE,
          });
        }}
      />
      <NavbarMenu
        className="fas fa-list-alt"
        onClick={() => {
          dispatch({
            type: Actions.CHANGE_MAIN_CONTENTS_MODE_TO_MYLIST,
          });
        }}
      />
      <NavbarMenu
        className="fas fa-search"
        onClick={() => {
          dispatch({
            type: Actions.CHANGE_MAIN_CONTENTS_MODE_TO_SEARCH,
            payload: { searchBarOnOff: true },
          });
        }}
      />
    </NavbarMenusWrap>
  );
};

const NavbarSearchBar = () => {
  // const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();
  return (
    <NavbarSearchBarWrap>
      <NavbarSearchBarInput
        onChange={(e) => {
          dispatch({
            type: Actions.SET_SEARCH_RESULT,
            payload: { searchResult: e.target.value },
          });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || "Esc") {
            dispatch({
              type: Actions.SET_SEARCH_ENTER_ACTIVATED,
            });
          }
        }}
      />
    </NavbarSearchBarWrap>
  );
};

export const Navbar = () => {
  // const [a, b] = useSelector<GlobalState, [string, number]>((state) => [
  //   state.a,
  //   state.b,
  // ]);
  const searchBarOnOff = useSelector<GlobalState, boolean>(
    (state) => state.searchBarOnOff
  );
  const dispatch = useDispatch();
  return searchBarOnOff ? (
    <NavbarWrap>
      <OnOutsiceClick
        onOutsideClick={() => {
          dispatch({
            type: Actions.CHANGE_MAIN_CONTENTS_MODE_TO_SEARCH,
            payload: { searchBarOnOff: false },
          });
        }}
      >
        <NavbarSearchBar />
      </OnOutsiceClick>
    </NavbarWrap>
  ) : (
    <NavbarWrap>
      <NavbarMenus />
    </NavbarWrap>
  );
};
