import React, { Component } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import Gallery from "./Gallery";
import "./App.css";
import SelectCard from "./SelectedCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentSelect: -1
    };
  }

  selectCard = i => this.setState({ currentSelect: i });

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        "https://api.pokemontcg.io/v1/cards?pageSize=15"
      );
      console.log(data);
      this.setState({ cards: data.cards });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { cards, currentSelect } = this.state;
    console.log("render", cards[0]);
    return (
      <Container className="App">
        {currentSelect >= 0 && <SelectCard card={cards[currentSelect]} />}

        <Gallery
          cards={cards}
          selectCard={this.selectCard}
          currentSelect={currentSelect}
        />
      </Container>
    );
  }
}

export default App;
