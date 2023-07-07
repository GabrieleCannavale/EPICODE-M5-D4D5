import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentById, fetchCommentsByBookId } from '../../commentState/commentActions';
import './singleComment.css';

function SingleComment({comment}) {
  
  const dispatch = useDispatch();
  const bookAsin  = useSelector((state) => state.comments.selectedAsin);


  const handleDelete = () => {
    dispatch(deleteCommentById(comment._id))
    .then(() => dispatch(fetchCommentsByBookId(bookAsin)));
  };

  return (
    <Card className="text-center">
      
      <Card.Body>
       <Card.Body className='d-flex flex-row justify-content-between'> 
          <Card.Title className='author-comment' >{comment.author}</Card.Title>
          <div className='align-items-baseline'>
            <Button onClick={handleDelete} variant="outline-danger" className='border-2'><i class="bi bi-trash-fill"></i></Button>
            <Button  variant="outline-warning" className='mx-1 border-2'><i class="bi bi-pencil-fill"></i></Button>
          </div>
        </Card.Body>
        <Card.Text className='ms-3 text-start'>{comment.comment}</Card.Text>
        <Card.Text className=" ms-3 text-start">rate: {comment.rate}/5</Card.Text>
      </Card.Body>
      <Card.Footer>{comment.createdAt}</Card.Footer>
    </Card>
  );
}

export default SingleComment;