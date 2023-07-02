import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleComment({comment}) {
  return (
    <Card className="text-center">
      <Card.Header>{comment.createdAt}</Card.Header>
      <Card.Body>
        <Card.Title>{comment.author}</Card.Title>
        <Card.Text>
          {comment.comment}
        </Card.Text>
        <Button variant="danger">Delete</Button>
      </Card.Body>
      <Card.Footer className="text-muted">rate: {comment.rate}/5</Card.Footer>
    </Card>
  );
}

export default SingleComment;