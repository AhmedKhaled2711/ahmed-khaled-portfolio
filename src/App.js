import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;
