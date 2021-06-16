import React from "react";
import logo from "./logo.svg";
// import './App.css';

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";

import styled from "styled-components";

const BackgroundWrap = styled.div`
  width: 100%;
  height: 100vh;
  /* position: fixed; // 음... 이전에 어떻게 했지?? */
  background: linear-gradient(
    90deg,
    #38adae -1.77%,
    #cd295a 103.5%,
    rgba(254, 144, 175, 0) 103.51%
  );
`;

function App() {
  return (
    <BackgroundWrap>
      <Navbar />
      <Main />
      <Footer />
    </BackgroundWrap>
  );
}

export default App;
