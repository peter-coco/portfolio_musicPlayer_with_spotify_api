import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Navbar} from "./components/navbar"
import {Footer} from "./components/footer"
import {Main} from "./components/main/main"


function App() {
  return (
    <div id = "background-wrap">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
