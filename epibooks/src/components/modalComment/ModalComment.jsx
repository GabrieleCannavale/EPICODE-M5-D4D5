// ModalComment.jsx
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { fetchCommentsByBookId, putCommentById } from "../../commentState/commentActions";
import { useDispatch } from "react-redux";

function ModalComment({
  showModal,
  handleHideModal,
  comment,
  setUpdatedComment,
}) {
  const dispatch = useDispatch();
  const [localComment, setLocalComment] = useState(comment.comment);
  const [rate, setRate ] = useState(1)

  const handleSaveChanges = () => {
    dispatch(
      putCommentById({
        commentId: comment._id,
        updatedData: { comment: localComment, _id: comment._id, rate: rate },
      }),
      dispatch(fetchCommentsByBookId(comment._id))
    );
    handleHideModal(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          handleHideModal(false);
          setLocalComment(comment.comment);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>comment</Form.Label>
              <Form.Control
                type="input"
                placeholder="change comment"
                autoFocus
                value={localComment}
                onChange={(e) => setLocalComment(e.target.value)}
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
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComment;
