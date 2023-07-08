import MyNavigationBar from "../../components/myNavigationBar/MyNavigationBar";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bookDetail } from "../../bookState/bookDetailsReducer";
import { useEffect } from "react";
import { fetchDetails } from "../../bookState/bookDetailsReducer";
import "./bookDetail.css";

function BookDetails() {
  const dispatch = useDispatch();
  const book = useSelector(bookDetail);
  const { bookAsin } = useParams();

  useEffect(() => {
    dispatch(fetchDetails(bookAsin));
  }, [dispatch]);

  console.log(book);

  return (
    <>
      <MyNavigationBar />

    <section className="py-5" >
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={book.img}
                alt="product image"
              />
            </div>
            <div className="col-md-6">
              <h1 class="display-5 fw-bolder">
                {book.title}
              </h1>
              <div className="fs-5 mb-5">
                <span>Price: {book.price}€</span>
              </div>
              <div className="fs-5 mb-5">
                <em>Category: {book.category}</em>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div className="d-flex">
                <button
                  className="btn btn-outline-danger flex-shrink-0"
                  type="button"
                >
                  <i className="bi bi-bag-plus-fill"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookDetails;
