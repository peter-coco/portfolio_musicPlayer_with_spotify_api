import React from "react";

// import './App.css';

import { Provider, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";

import store from "./redux/index";

function App() {
  return (
    <Provider store={store}>
      <Dashboard />;
    </Provider>
  );
}

export default App;
