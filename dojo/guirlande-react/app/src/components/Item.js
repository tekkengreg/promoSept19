import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false
    };
  }

  updateDone = () => this.setState({ isDone: !this.state.isDone });

  render() {
    const { name, isActive } = this.props;
    const { isDone } = this.state;
    console.log(isDone);
    return (
      <li
        style={{
          fontSize: "50px",
          color: isActive,
          textDecoration: isDone ? "line-through" : ""
        }}
        onClick={this.updateDone}
      >
        {name}
        {isDone}
      </li>
    );
  }
}

export default Item;
