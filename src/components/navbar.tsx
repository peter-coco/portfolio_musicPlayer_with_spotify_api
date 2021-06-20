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
  @media (max-width: 750px) {
    font-size: 20px;
  }
  @media (max-width: 350px) {
    font-size: 15px;
  }
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
          dispatch({
            type: Actions.MAIN_CONTENTS_MODE_CHANGE,
            payload: { modeNum: 0 },
          });
        }}
      />
      <NavbarMenu
        className="fas fa-chart-bar"
        onClick={() => {
          dispatch({
            type: Actions.MAIN_CONTENTS_MODE_CHANGE,
            payload: { modeNum: 1 },
          });
        }}
      />
      <NavbarMenu
        className="fas fa-list-alt"
        onClick={() => {
          dispatch({
            type: Actions.MAIN_CONTENTS_MODE_CHANGE,
            payload: { modeNum: 2 },
          });
        }}
      />
      <NavbarMenu
        className="fas fa-search"
        onClick={() => {
          dispatch({
            type: Actions.MAIN_CONTENTS_MODE_CHANGE,
            payload: { modeNum: 3 },
          });
        }}
      />
    </NavbarMenusWrap>
  );
};

export default function Navbar() {
  // const [a, b] = useSelector<GlobalState, [string, number]>((state) => [
  //   state.a,
  //   state.b,
  // ]);

  return (
    <NavbarWrap>
      <NavbarMenus />
    </NavbarWrap>
  );
}
