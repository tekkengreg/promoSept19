import React, { Component } from "react";

const styles = {
  counter: {
    fontSize: "150px",
    color: "red"
  },
  title: {
    background: "black"
  }
};

class Counter extends Component {
  constructor(props) {
    super(props);
    // const rand = Math.floor(Math.random() * 150);
    // setInterval(() => (styles.counter.fontSize = `${rand}px`), 500);

    this.state = {
      count: 1000,
      isActive: false
    };

    setInterval(() => {
      const { count } = this.state;
      this.setState({ count: count - 1 });
    }, 1000);
    setInterval(() => {
      const { isActive } = this.state;
      this.setState({ isActive: !isActive });
    }, 5000);

    // this.increment = this.increment.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { title } = this.props;
    const { count, isActive } = this.state;
    return (
      <div
        style={{
          ...styles.counter,
          background: isActive ? "blue" : "none"
        }}
      >
        {title} : {count}
      </div>
    );
  }
}

export default Counter;
