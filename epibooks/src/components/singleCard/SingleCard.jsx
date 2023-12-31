import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function SingleCard({ book, handleCardClick }) {
  //console.log(book);
  return (
    <Col className="d-flex mx-1 my-5 main">
      <Card
        onClick={handleCardClick}
        className="border-0"
        style={{ width: "14rem", height: "20rem" }}
      >
        <Card.Img
          variant="top"
          className="h-75 object-fit-contain"
          src={book.img}
          alt={book.title}
        />
        <Card.Body className="d-flex flex-column justify-content-between align-items-start">
          <Card.Title className="font-italic  overflow-hidden" style={{height:"3rem"}}>{book.title}</Card.Title>
          <Card.Text> € {book.price}</Card.Text>
          <Link to={`/book/${book.asin}`}>
            <Button variant="outline-warning border-2"><i class="bi bi-eye-fill"></i></Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
