import React, { Component } from "react";
import { randomOf } from "../helpers";

class Point extends Component {
  constructor(props) {
    super(props);
    this.r = randomOf(50);
    this.c = `rgb(${randomOf(256)},${randomOf(256)},${randomOf(256)})`;
    this.state = {};
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    // this.r = randomOf(50);
    // this.c = `rgb(${randomOf(256)},${randomOf(256)},${randomOf(256)})`;
  }
  render() {
    const { x, y } = this.props;
    const { r, c } = this;

    return (
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          left: `${x}vw`,
          top: `${y}vh`,
          width: `${r}px`,
          height: `${r}px`,
          background: c
        }}
      />
    );
  }
}

export default Point;
