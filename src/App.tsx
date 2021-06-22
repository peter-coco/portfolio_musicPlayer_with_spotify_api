import React from "react";
import logo from "./logo.svg";
// import './App.css';

import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

import store from "./redux";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? (
    <Provider store={store}>
      <Dashboard code={code} />
    </Provider>
  ) : (
    <Login />
  );
}

export default App;
