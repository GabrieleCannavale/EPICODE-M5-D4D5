import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createComment, fetchCommentsByBookId } from "../../commentState/commentActions";


const AddComment = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const bookAsin  = useSelector((state) => state.comments.selectedAsin);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let payload = {
      comment: comment,
      rate: rate,
      elementId: bookAsin
    }
    console.log(payload)
    // Effettua la chiamata API per aggiungere il commento
    dispatch(createComment(payload)).then(() => dispatch(fetchCommentsByBookId(bookAsin)));

    // Resetta i campi del form dopo aver inviato il commento
    setComment("");
    setRate(1);
  };

  return (
    <>
      <h3>Comments about:</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="input"
          placeholder="Type comment"
          className="me-2 col"
          aria-label="input"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Form.Control
          as="select"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Form.Control>
        <Button variant="outline-success" type="submit">
          Add Comment
        </Button>
      </Form>
    </>
  );
};

export default AddComment;
