import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleCard = ({ book }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text> € {book.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
