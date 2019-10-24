import React, { Component } from "react";
import axios from "axios";
import Gallery from "./components/Gallery";
import { Container } from "reactstrap";
import DisplayCard from "./components/DisplayCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCard: -1
    };
  }

  componentDidMount() {
    axios
      .get("https://api.pokemontcg.io/v1/cards?pageSize=15")
      .then(response => {
        this.setState({ cards: response.data.cards });
      })
      .catch(e => console.log(e));
  }

  selectCard = cardId => {
    this.setState({ currentCard: cardId });
  };

  render() {
    console.log(this.state.currentCard);
    return (
      <Container>
        {this.state.currentCard >= 0 && (
          <DisplayCard card={this.state.cards[this.state.currentCard]} />
        )}
        <Gallery cards={this.state.cards} selectCard={this.selectCard} />
      </Container>
    );
  }
}

export default App;
