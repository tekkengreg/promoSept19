import React from "react";
import { Row, Col, Card, CardImg } from "reactstrap";

const Gallery = props => {
  return (
    <Row>
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

export default Gallery;
