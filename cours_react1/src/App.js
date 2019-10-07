import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";

const App = () => {
  const varTest = "tototo";
  const json = { title: "toto", subtitle: "tata" };
  return (
    <div className="App">
      <p>test1: {varTest}</p>
      <p>test2: varTest</p>
      <Title {...json} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and saaaave to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
export default App;
