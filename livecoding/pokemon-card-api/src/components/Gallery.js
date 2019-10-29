import React, { useContext } from "react";
import { Row, Col, Card, CardImg } from "reactstrap";
import { withCard, CardContext } from "../providers/CardContext";

const Gallery = props => {
  const { counter, inc } = useContext(CardContext);

  return (
    <Row>
      <h1 onClick={() => inc(counter + 1)}>{counter}</h1>
      {props.cards.map((card, i) => {
        return (
          <Col
            key={`ca-${i + 1}`}
            xs={3}
            onClick={() => props.selectCard(i)}
            style={{ padding: "10px" }}
          >
            <Card>
              <CardImg top width="100%" src={card.imageUrl} />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

// export default withCard(Gallery);
export default Gallery;
