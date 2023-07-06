import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyNavigationBar from '../components/myNavigationBar/MyNavigationBar';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bookDetail } from '../bookState/bookDetailsReducer';
import { useEffect } from 'react';
import { fetchDetails } from '../bookState/bookDetailsReducer';


function BookDetails() {
    
    const dispatch = useDispatch();
    const book = useSelector(bookDetail)
    const {bookAsin} = useParams();


    useEffect(() => {
        dispatch(fetchDetails(bookAsin))
    }, [dispatch])

    
    console.log(book);

  return (
    <>
    <MyNavigationBar/>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img}/>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas alias exercitationem sequi illo, facere omnis eos architecto, voluptatem laudantium, accusamus dolorem illum fuga perferendis repellat eligendi deleniti id aliquid corrupti.
        </Card.Text>
        <Card.Text>
          {book.price}€
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

export default BookDetails;