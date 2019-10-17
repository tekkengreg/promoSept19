import React, { Component } from "react";
import { randomOf } from "../helpers";

class Dot extends Component {
  constructor(props) {
    super(props);
    this.c = `rgb(${randomOf(256)},${randomOf(256)},${randomOf(256)})`;
    this.r = randomOf(50) + 50;
    this.state = {};
  }

  render() {
    const { r, c } = this;
    const { xToto, yToto } = this.props;
    return (
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          height: `${r}px`,
          width: `${r}px`,
          left: `${xToto}vw`,
          top: `${yToto}vh`,
          background: c
        }}
      />
    );
  }
}

export default Dot;
