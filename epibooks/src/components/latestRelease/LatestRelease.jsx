import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../bookState/bookActions";
import SingleCard from "../singleCard/SingleCard";
import "./latestRelease.css";
import { fetchCommentsByBookId } from "../../commentState/commentActions";
import SingleComment from "../singleComment/SingleComment";

export default function LatestRelease() {
  const dispatch = useDispatch();
  const { bookArrayRedux } = useSelector((state) => state.books);
  const { commentArrayRedux } = useSelector((state) => state.comments);

  // console.log(bookArrayRedux);
  console.log(commentArrayRedux);

  const [selectedBookComments, setSelectedBookComments] = useState([]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleCardClick = async (asin) => {
    const comments = await dispatch(fetchCommentsByBookId(asin));
    setSelectedBookComments(comments);
  };

  return (
    <Row className="d-flex pt-4">
      <Container className="col-8">
        <Row className="d-flex gap-2">
          {bookArrayRedux &&
            bookArrayRedux.map((book) => (
              <SingleCard
                key={book.asin}
                book={book}
                onClick={() => handleCardClick(book.asin)}
              />
            ))}
        </Row>
      </Container>
      <Container className="col-4">
        <h3>Click a card to see relative comments!</h3>
        <Container>
          {selectedBookComments &&
            selectedBookComments.map((comment) => (
              <SingleComment key={comment._id} comment={comment} />
            ))}
        </Container>
      </Container>
    </Row>
  );
}
