import React from "react";
import { Provider, useSelector } from "react-redux";
import store from "./redux/index";
import styled from "styled-components";

import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";

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

function App() {
  return (
    <Provider store={store}>
      <BackgroundWrap>
        <Navbar />
        <Main />
        <Footer />
      </BackgroundWrap>
    </Provider>
  );
}

export default App;
