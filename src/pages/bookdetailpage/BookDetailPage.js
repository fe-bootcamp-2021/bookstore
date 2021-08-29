import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory, useParams } from "react-router-dom";

import { makingOrder } from "../../redux/ducks/ordersSlice";
import { getBooks } from "../../redux/ducks/booksSlice";
import shopCart from "../../assets/images/shopping-cart(1).svg";
import addOrder from "../../assets/images/plus-circle(1).svg";
import removeOrder from "../../assets/images/minus-circle.svg";
import styles from "../bookdetailpage/BookDetailPage.module.css";
import { addItem } from "../../redux/ducks/cartItemSlice";

const BookDetailPage = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  const currentUser = useSelector((state) => state.users.currentUser);
  const myCartItem = useSelector((state) => state.cart);

  const history = useHistory();
  const { id } = useParams();
  // const book = useLocation().state.book
  const book = books.find((book) => book.id === id);
  const cartItem = {};
  cartItem.title = book.title;
  cartItem.author = book.writer;

  const plusMinusHandler = (type) => {
    let count;
    switch (type) {
      case "plus":
        count = quantity + 1 < +book.count ? quantity + 1 : +book.count;
        return setQuantity(count);
      case "minus":
        count = quantity - 1 > 1 ? quantity - 1 : 1;
        return setQuantity(count);
    }
  };
  cartItem.Quantity = quantity;
  cartItem.price = book.price;
  cartItem.warehouseCount = book.count;

  const addToCartHandler = () => {
    if (currentUser) dispatch(addItem(cartItem));
    else {
      setErrorMessage("You should sign in before proceeding");
    }
  };
  const closeError = () => {
    setErrorMessage(null);
  };
  const orderingHandler = () => {
    if (!book.count || !currentUser) {
      return;
    }
    dispatch(makingOrder({ user: currentUser, book, quantity }));
  };

  return book ? (
    <>
      <div className={styles.container}>
        <div className={styles.upperBody}>
          <h1>{book.title}</h1>
          <h3>{book.writer}(author)</h3>
        </div>
        <div className={styles.image}>
          <img src={book.img} />
        </div>
        <div className={styles.body}>
          <h1>{book.title}</h1>
          <h3>{book.writer}(author)</h3>
          <div className={styles.orderButton}>
            <p>Quantity of order:</p>
            <button
              className={styles.order}
              onClick={() => plusMinusHandler("minus")}
            >
              <img src={removeOrder} />
            </button>
            {quantity}
            <button
              className={styles.order}
              onClick={() => plusMinusHandler("plus")}
            >
              <img src={addOrder} />
            </button>
            <button className={styles.cartButton} onClick={addToCartHandler}>
              <img src={shopCart} />
              Add to Cart
            </button>
            <p onClick={closeError}>{errorMessage}</p>
            <button className={styles.cartButton} onClick={orderingHandler}>
              {" "}
              Order
              {/* {!book.count
              ? "out of order"
              : currentUser
              ? "order"
           : "please login to order"}*/}
            </button>
          </div>
          <div>
            <h2>Description</h2>
            <p className={styles.align}>{book.genre}</p>
          </div>
          <div>
            <h2>Product Details</h2>
            <p>Published year:{book.yearPublished}</p>
            <p>Number of books available:{book.count}</p>
            <p>
              Price: {book.price}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Armenian_dram_sign.svg"
                style={{ height: "12px", width: "12px" }}
              />
            </p>
          </div>
        </div>
        <div className={styles.lowerBody}>
          <div className={styles.orderButton}>
            <p>Quantity of order:</p>
            <button
              className={styles.order}
              onClick={() => plusMinusHandler("minus")}
            >
              <img src={removeOrder} />
            </button>
            {quantity}
            <button
              className={styles.order}
              onClick={() => plusMinusHandler("plus")}
            >
              <img src={addOrder} />
            </button>
            <button disabled={!currentUser} className={styles.cartButton}>
              <img src={shopCart} />
              Add to Cart
            </button>
            <p onClick={closeError}>{errorMessage}</p>
            <button
              className={styles.cartButton}
              disabled={!currentUser || !book.count}
              onClick={orderingHandler}
            >
              {" "}
              Order
              {/*{!book.count
              ? "out of order"
              : currentUser
              ? "order"
            : "please login to order"}*/}
            </button>
          </div>
          <div>
            <h2>Description</h2>
            <p className={styles.align}>{book.genre}</p>
          </div>
          <div>
            <h2>Product Details</h2>
            <p>Published year:{book.yearPublished}</p>
            <p>Number of books available:{book.count}</p>
            <p>
              Price: {book.price}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Armenian_dram_sign.svg"
                style={{ height: "12px", width: "12px" }}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className={styles.loader}>
      <img src="https://i.pinimg.com/originals/b9/1e/11/b91e1131ca20f6369aa68d21cb3a8960.gif" />
    </div>
  );
};

export default BookDetailPage;

/* <div className={styles.BookDetailPage} >
            <h3>title: {book.title}</h3>
            <h3>writer: {book.writer}</h3>
            <h3>yearPublished: {book.yearPublished}</h3>
            <h3>quantity: {book.count}</h3>
            <div style={{height: '30px', display: 'flex', justifyContent: 'space-evenly', marginBottom: '15px'}} >
                <button disabled={!book.count || !currentUser} onClick={() => plusMinusHandler('minus')} >-</button>
                    {quantity}
                <button disabled={!book.count || !currentUser} onClick={() => plusMinusHandler('plus')} >+</button>
            </div>
            <button
                disabled={!currentUser || !book.count} 
                onClick={orderingHandler}
            >{!book.count ? 'out of order' : currentUser ?  'order' : 'please login to order'}</button>
        </div> : <h3>Loading...</h3>
    )*/
