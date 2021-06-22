import { useState, useEffect } from "react";
import styled from "styled-components";

import Navbar from "./navbar";
import { Footer } from "./footer/footer";
import { Main } from "./main/main";

const BackgroundWrap = styled.div`
  width: 100vw;
  height: 100vh;
  /* position: fixed; // 음... 이전에 어떻게 했지?? */
  background: linear-gradient(
    90deg,
    #38adae -1.77%,
    #cd295a 103.5%,
    rgba(254, 144, 175, 0) 103.51%
  );
`;

export default function Dashboard({ code }) {
  return (
    <BackgroundWrap>
      <Navbar />
      <Main code={code} />
      <Footer />
    </BackgroundWrap>
  );
}
