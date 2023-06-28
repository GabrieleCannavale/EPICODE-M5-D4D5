import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../State/bookActions";
import SingleCard from "../singleCard/SingleCard";



export default function LatestRelease(){
  const dispatch = useDispatch();
  const  {bookArrayRedux}  = useSelector((state) => state.books);
  console.log(bookArrayRedux);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  
  
  return (
      <Container>
        <Row className="d-flex gap-2">
          {bookArrayRedux && bookArrayRedux.map((book) => (
            <SingleCard book={book} />
          ))}
        </Row>
      </Container>
  );
};


