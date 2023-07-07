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

      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6">
              <img
                id="product-image"
                class="card-img-top mb-5 mb-md-0"
                src={book.img}
                alt="product image"
              />
            </div>
            <div class="col-md-6">
              <h1 id="product-name" class="display-5 fw-bolder">
                {book.title}
              </h1>
              <div class="fs-5 mb-5">
                <span id="product-price">Price: {book.price}€</span>
              </div>
              <div class="fs-5 mb-5">
                <em id="product-price">Category: {book.category}</em>
              </div>
              <p id="product-descr" class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div class="d-flex">
                <button
                  class="btn btn-outline-danger flex-shrink-0"
                  type="button"
                >
                  <i class="bi bi-bag-plus-fill"></i>
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
