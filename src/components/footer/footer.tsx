import styled from "styled-components";

import { FooterMusicInfor } from "./footer-musicInfor";
import { FooterOperations } from "./footer-operations";
import musicImg from "../../image/navbar-logo.png";

const FooterWrap = styled.div`
  width: 100%;
  height: 10vh;
  min-height: 60px;
  padding: 0 40px;
  box-sizing: border-box;
  /* position: absolute; */
  /* bottom: 0; */
  background-color: #000;
  display: flex;

  align-items: center;
  justify-content: space-around;

  @media (max-width: 750px) {
    padding: 0 10px;
  }
`;

const FooterLogoImg = styled.img`
  width: 60px;
  height: 60px;

  @media (max-width: 750px) {
    width: 30px;
    height: 30px;
  }
`;

const FooterLogoImgWrap = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 750px) {
    width: 60px;
  }
`;

export function Footer() {
  return (
    <FooterWrap>
      {/* <div style={{ width: 250 }} /> */}
      {/* <FooterLogoImgWrap>
        <FooterLogoImg src={musicImg} />
      </FooterLogoImgWrap> */}
      <FooterMusicInfor />
      <FooterOperations />
    </FooterWrap>
  );
}
