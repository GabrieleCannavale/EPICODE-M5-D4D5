import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../State/bookActions";
import SingleCard from "../singleCard/SingleCard";
import './latestRelease.css';



export default function LatestRelease(){
  const dispatch = useDispatch();
  const  {bookArrayRedux}  = useSelector((state) => state.books);
  console.log(bookArrayRedux);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  
  
  return (
    <Row className="d-flex pt-4">
      <Container className="col-8">
        <Row className="d-flex gap-2">
          {bookArrayRedux && bookArrayRedux.map((book) => (
            <SingleCard book={book} />
          ))}
        </Row>
      </Container>
      <Container className="col-4">
        <h3>Click a card to see comments!</h3>
        <Container>
        </Container>
      </Container>
      </Row>
  );
};


