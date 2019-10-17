import React, { Component } from "react";
import Dot from "../components/Dot";
import { randomOf } from "../helpers";

class DotListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      points: []
    };

    this.updatePoints();
  }

  updatePoints = () => {
    const pointsTemp = [];
    for (let i = 0; i < 5; i++) {
      pointsTemp.push({
        x: randomOf(100),
        y: randomOf(100)
      });
    }
    this.setState({
      points: pointsTemp
    });
    setTimeout(this.updatePoints, randomOf(1500));
  };

  render() {
    const { points } = this.state;
    return (
      <div className="DoListPage">
        {points.map(point => {
          return (
            <Dot
              key={`${point.x}-${point.y}`}
              xToto={point.x}
              yToto={point.y}
            />
          );
        })}
      </div>
    );
  }
}

export default DotListPage;
