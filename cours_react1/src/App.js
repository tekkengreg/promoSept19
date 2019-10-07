import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Title";
import Avatar from "./Avatar";

const bart = {
  image:
    "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  fname: "Bart",
  lname: "Simpson"
};

const App = () => {
  const varTest = "tototo";
  const json = { title: "toto", subtitle: "tata" };
  return (
    <div className="App">
      <Avatar {...bart} />
      <Avatar image={logo} fname="toto2" lname="tata" />
      <Avatar image={logo} fname="toto3" lname="tata" />
      <p>test1: {varTest}</p>
      <p>test2: varTest</p>
      <Title {...json} />
    </div>
  );
};
export default App;
