import styled from "styled-components";

import { FooterMusicInfor } from "./footer-musicInfor";
import { FooterOperations } from "./footer-operations";
import musicImg from "../../image/navbar-logo.png";

const FooterWrap = styled.div`
  width: 100%;
  height: 10vh;
  /* position: absolute; */
  /* bottom: 0; */
  background-color: #000;
  display: flex;

  align-items: center;
  justify-content: space-around;
`;

const MusicInforImage = styled.img`
  width: 60px;
  height: 60px;
`;

export function Footer() {
  return (
    <FooterWrap>
      <MusicInforImage src={musicImg} />
      <FooterMusicInfor />
      <FooterOperations />
    </FooterWrap>
  );
}
