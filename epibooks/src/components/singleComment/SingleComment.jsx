// SingleComment.jsx
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCommentById,
  fetchCommentsByBookId,
} from "../../commentState/commentActions";
import "./singleComment.css";
import ModalComment from "../modalComment/ModalComment";
import { useState } from "react";

function SingleComment({ comment }) {
  const dispatch = useDispatch();
  const bookAsin = useSelector((state) => state.comments.selectedAsin);
  const [showModal, setShowModal] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(comment.comment);

  const handleDelete = () => {
    dispatch(deleteCommentById(comment._id)).then(() =>
      dispatch(fetchCommentsByBookId(bookAsin))
    );
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Body className="d-flex flex-row justify-content-between">
          <Card.Title className="author-comment">{comment.author}</Card.Title>
          <div className="align-items-baseline">
            <Button
              onClick={handleDelete}
              variant="outline-danger"
              className="border-2"
            >
              <i class="bi bi-trash-fill"></i>
            </Button>

            <Button
              variant="outline-warning"
              className="mx-1 border-2"
              onClick={() => setShowModal(true)}
            >
              <i class="bi bi-pencil-fill"></i>
            </Button>

            <ModalComment
              showModal={showModal}
              handleHideModal={setShowModal}
              comment={comment}
              setUpdatedComment={setUpdatedComment}
            />
          </div>
        </Card.Body>
        <Card.Text className="ms-3 text-start">{comment.comment}</Card.Text>
        <Card.Text className=" ms-3 text-start">
          rate: {comment.rate}/5
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleComment;
