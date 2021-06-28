import React from "react";

// import './App.css';

import { Provider, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import store from "./redux";
import { GlobalState } from "./redux/reducer";

// const code = new URLSearchParams(window.location.search).get("code");

const Main = () => {
  const code = useSelector<GlobalState, string>((state) => state.entraceCode);
  console.log(code);
  return code ? <Dashboard code={code} /> : <Login />;
};

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
