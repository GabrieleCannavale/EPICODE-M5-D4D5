import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../bookState/bookActions";
import SingleCard from "../singleCard/SingleCard";
import AddComment from "../addComment/AddComment";
import "./latestRelease.css";
import { fetchCommentsByBookId } from "../../commentState/commentActions";
import SingleComment from "../singleComment/SingleComment";
import { nanoid } from "nanoid";
import { setAsin } from "../../commentState/commentReducer";

export default function LatestRelease() {
  const dispatch = useDispatch();
  const { bookArrayRedux } = useSelector((state) => state.books);
  const { commentArrayRedux } = useSelector((state) => state.comments);
  console.log(commentArrayRedux);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleCardClick = (asin) => {
    dispatch(setAsin(asin))
    dispatch(fetchCommentsByBookId(asin));
  };

  return (
    <Row className="d-flex pt-4">
      <Container className="col-8">
        <Row className="d-flex gap-2">
          {bookArrayRedux &&
            bookArrayRedux.map((book) => (
              <SingleCard
                key={nanoid()}
                book={book}
                handleCardClick={() => handleCardClick(book.asin)}
              />
            ))}
        </Row>
      </Container>

      <Container className="col-4">
        {commentArrayRedux.length === 0 ? (
          <h3>Click a card to see relative comments!</h3>
        ) : (
          
            <AddComment/>
           
        )}
        {commentArrayRedux &&
          commentArrayRedux.map((comment) => (
            <SingleComment key={comment._id} comment={comment} />
          ))}
      </Container>
    </Row>
  );
}
