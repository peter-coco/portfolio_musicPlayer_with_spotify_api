import styled from "styled-components";

const NavbarWrap = styled.div`
  width: 100%;
  height: 10vh;
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

function NavbarMenus() {
  return (
    <NavbarMenusWrap>
      <NavbarMenu className="fas fa-home"></NavbarMenu>
      <NavbarMenu className="fas fa-chart-bar"></NavbarMenu>
      <NavbarMenu className="fas fa-list-alt"></NavbarMenu>
      <NavbarMenu className="fas fa-search"></NavbarMenu>
    </NavbarMenusWrap>
  );
}

export function Navbar() {
  return (
    <NavbarWrap>
      <NavbarMenus />
    </NavbarWrap>
  );
}
