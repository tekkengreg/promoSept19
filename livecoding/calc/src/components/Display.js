import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">{this.props.numberToDisplay}</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Display;
