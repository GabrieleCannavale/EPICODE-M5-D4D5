import React, { useEffect, useState } from "react";
import {Row, Col, Container} from "react-bootstrap";
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
  const [cardClicked, setCardClicked] = useState(false); // Aggiungi questo stato
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleCardClick = (asin) => {
    setCardClicked(true); // Imposta cardClicked a true quando una card viene cliccata
    dispatch(setAsin(asin));
    dispatch(fetchCommentsByBookId(asin));
  };

  return (
    
    <Container fluid>
      <Row key={nanoid()}>
        <Col key={nanoid()} xs={12} sm={8} className="books-container d-flex gap-2 flex-wrap">
          {bookArrayRedux &&
            bookArrayRedux.map((book) => (
              <SingleCard
                key={nanoid()}
                book={book}
                handleCardClick={() => handleCardClick(book.asin)}
              />
            ))}
        </Col>
        <Col key={nanoid()} xs={12} sm={4} className="comment-container mx-auto"> 
        {cardClicked && <AddComment />}{" "}
        {commentArrayRedux &&
          commentArrayRedux.map((comment) => (
            <SingleComment
              key={comment._id}
              comment={comment}
              handleShowModal={setShowModal}
             />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
