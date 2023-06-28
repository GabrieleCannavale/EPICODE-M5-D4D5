import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleCard from "../singleCard/SingleCard";
import { useSelector } from "react-redux";

const LatestRelease = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="main-div py-5">
      <Container>
        <Row className="d-flex gap-2">
          {books.map((book) => (
            <SingleCard
              key={book.asin}
              img={book.img}
              title={book.title}
              price={book.price}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LatestRelease;
