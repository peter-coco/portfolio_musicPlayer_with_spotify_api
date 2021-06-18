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
`;

const NavbarMenu = styled.i`
  font-size: 25px;
  color: #fff;
`;

const NavbarMenus = () => (
  <NavbarMenusWrap>
    <NavbarMenu className="fas fa-home"></NavbarMenu>
    <NavbarMenu className="fas fa-chart-bar"></NavbarMenu>
    <NavbarMenu className="fas fa-list-alt"></NavbarMenu>
    <NavbarMenu className="fas fa-search"></NavbarMenu>
  </NavbarMenusWrap>
);

export default function Navbar() {
  const [a, b] = useSelector<GlobalState, [string, number]>((state) => [
    state.a,
    state.b,
  ]);
  const dispatch = useDispatch();

  return (
    <NavbarWrap>
      <NavbarMenus />
    </NavbarWrap>
  );
}
