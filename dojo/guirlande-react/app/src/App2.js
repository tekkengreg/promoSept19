import React, { Component } from "react";
import { randomOf } from "./helpers";
import Point from "./components/Point";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const points = [];
    for (let i = 0; i < 50; i++)
      points.push({ x: randomOf(100), y: randomOf(100) });

    this.state = {
      points
    };
  }

  componentDidMount() {
    this.updatePoints();
  }

  updatePoints = () => {
    this.rmPoint();
    this.addPoint();
    setTimeout(this.updatePoints, randomOf(500));
  };

  addPoint = () => {
    const { points } = this.state;
    points.push({ x: randomOf(100), y: randomOf(100) });
    this.setState({ points });
  };

  rmPoint = () => {
    const { points } = this.state;
    points.splice(randomOf(points.length), 1);
    this.setState({ points });
  };

  render() {
    const { points } = this.state;
    return (
      <>
        {points.map((p, i) => (
          <Point key={`${p.x}-${p.y}`} x={p.x} y={p.y} />
        ))}
      </>
    );
  }
}

export default App;
