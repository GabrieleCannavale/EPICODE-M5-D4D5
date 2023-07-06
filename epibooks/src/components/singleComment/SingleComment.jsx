import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentById, fetchCommentsByBookId } from '../../commentState/commentActions';

function SingleComment({comment}) {
  
  const dispatch = useDispatch();
  const bookAsin  = useSelector((state) => state.comments.selectedAsin);


  const handleDelete = () => {
    dispatch(deleteCommentById(comment._id))
    .then(() => dispatch(fetchCommentsByBookId(bookAsin)));
  };

  return (
    <Card className="text-center">
      <Card.Header>{comment.createdAt}</Card.Header>
      <Card.Body>
        <Card.Title>{comment.author}</Card.Title>
        <Card.Text>
          {comment.comment}
        </Card.Text>
        <Button onClick={handleDelete} variant="danger">Delete</Button>
      </Card.Body>
      <Card.Footer className="text-muted">rate: {comment.rate}/5</Card.Footer>
    </Card>
  );
}

export default SingleComment;