import React from "react";
import { Jumbotron, Card, CardImg } from "reactstrap";

const SelectCard = ({ card }) => (
  <Jumbotron style={{ display: "flex", justifyContent: "center" }}>
    <Card>
      <CardImg
        style={{ height: "100px", width: "auto" }}
        top
        width="50%"
        src={card.imageUrl}
        alt="pokemon card"
      />
    </Card>
  </Jumbotron>
);

export default SelectCard;
