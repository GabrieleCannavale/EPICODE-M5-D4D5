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
  const [cardClicked, setCardClicked] = useState(false); // Aggiungi questo stato

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleCardClick = (asin) => {
    setCardClicked(true); // Imposta cardClicked a true quando una card viene cliccata
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
        {cardClicked && <AddComment/>} {/* Mostra AddComment solo se una card è stata cliccata */}
        {commentArrayRedux &&
          commentArrayRedux.map((comment) => (
            <SingleComment key={comment._id} comment={comment} />
          ))}
      </Container>
    </Row>
  );
}

