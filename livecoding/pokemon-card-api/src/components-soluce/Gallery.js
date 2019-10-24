import React, { Component } from "react";
import { Row, Card, CardImg, Col } from "reactstrap";

const Gallery = ({ cards, selectCard, currentSelect }) => (
  <Row className="Gallery">
    {cards.map((c, i) => (
      <Col xs={3} style={{ padding: "10px" }}>
        <Card
          onClick={() => selectCard(i)}
          style={{
            filter:
              currentSelect === i
                ? "drop-shadow(rgb(1,100,1) 0px 0px 12px)"
                : "none"
          }}
        >
          <CardImg top width="100%" src={c.imageUrl} alt="pokemon card" />
        </Card>
      </Col>
    ))}
  </Row>
);

export default Gallery;
