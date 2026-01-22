import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;
