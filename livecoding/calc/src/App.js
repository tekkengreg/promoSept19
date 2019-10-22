import React, { Component } from "react";
import { Container } from "reactstrap";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: ""
    };
  }

  concatNumber = chiffre => {
    console.log("ici", chiffre);
    this.setState({
      number: this.state.number + chiffre
    });
  };
  add = () => {
    return "add";
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Display numberToDisplay={this.state.number} />
          <Buttons clickNumber={this.concatNumber} add={this.add} />
        </Container>
      </div>
    );
  }
}

export default App;
