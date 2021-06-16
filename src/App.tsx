import React from 'react';
import logo from './logo.svg';
// import './App.css';

import {Navbar} from "./components/navbar"
import {Footer} from "./components/footer/footer"
import {Main} from "./components/main/main"

import styled from "styled-components";


const BackgroundWrap = styled.div`
  width : 100vw;
  height : 100vh;
  background: linear-gradient(90deg, #38ADAE -1.77%, #CD295A 103.5%, rgba(254, 144, 175, 0) 103.51%);
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
