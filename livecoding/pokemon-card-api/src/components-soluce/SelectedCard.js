import React from "react";
import { Jumbotron, Card, CardImg } from "reactstrap";

const SelectCard = ({ card }) => (
  <Jumbotron style={{ display: "flex", justifyContent: "center" }}>
    <Card>
      <CardImg top width="100%" src={card.imageUrl} alt="pokemon card" />
    </Card>
  </Jumbotron>
);

export default SelectCard;
