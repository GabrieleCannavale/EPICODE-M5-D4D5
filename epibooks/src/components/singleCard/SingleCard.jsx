import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function SingleCard({book, onClick }){
  //console.log(book);
  return (
    <Col className="d-flex m-1" >
      <Card onClick={onClick} className="border-0" style={{ width: "14rem" }}>
        <Card.Img variant="top" className="h-50 object-cover" src={book.img} alt={book.title} />
        <Card.Body className="d-flex flex-column justify-content-between align-items-start">
          <Card.Title className="font-italic">{book.title}</Card.Title>
          <Card.Text> € {book.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};


