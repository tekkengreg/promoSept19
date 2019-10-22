import React, { Component } from "react";
import { Card, CardBody, Button } from "reactstrap";

const styles = {
  button: {
    margin: "10px",
    padding: "10px 50px"
  }
};

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayButtons = () => {
    const buttons = [];
    for (let i = 0; i < 10; i++) {
      buttons.push(
        <Button
          key={`but-${i}`}
          style={styles.button}
          onClick={() => this.props.clickNumber(i)}
        >
          {i}
        </Button>
      );
    }
    return buttons;
  };

  render() {
    return (
      <div>
        <Card>
          <CardBody>{this.displayButtons()}</CardBody>
          <Button onClick={this.add}>+</Button>
        </Card>
      </div>
    );
  }
}

export default Buttons;
