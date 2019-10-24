import React from "react";
import { Jumbotron, Card, CardImg } from "reactstrap";
const DisplayCard = props => {
  console.log(props.card);
  return (
    <Jumbotron style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <CardImg top width="100%" src={props.card.imageUrl} />
      </Card>
    </Jumbotron>
  );
};

export default DisplayCard;
