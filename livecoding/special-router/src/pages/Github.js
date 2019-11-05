import React, { Component } from "react";
import axios from "axios";

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      house: "...loading"
    };
  }

  componentDidMount() {
    this.getHouse();
    setInterval(
      () =>
        axios
          .get("https://www.potterapi.com/v1/sortingHat")
          .then(({ data }) => this.setState({ house: data })),
      1000
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("scu", nextState.house, this.state.house);
    return nextState.house === "Ravenclaw";
  }
  getHouse = async () => {
    try {
      const { data } = await axios.get(
        "https://www.potterapi.com/v1/sortingHat"
      );
      console.log("lkj", data);
      this.setState({ house: data });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { house } = this.state;
    console.log(house);
    return <h1>{house}</h1>;
  }
}

export default Github;
