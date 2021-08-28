import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { makingOrder } from "../../redux/ducks/ordersSlice";
import { getBooks } from "../../redux/ducks/booksSlice";

import { addItem } from "../../redux/ducks/cartSlice";
import { createCart } from "./helpers/cartCreation";
import { defaultQuantity, warningMessage } from "./constants";
import shopCart from "../../assets/images/shopping_cart(1).svg";
import addOrder from "../../assets/images/plus_circle(1).svg";
import removeOrder from "../../assets/images/minus_circle.svg";
import styles from "../BookDetailPage/BookDetailPage.module.css";

const BookDetailPage = (props) => {
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [errorMessage, setErrorMessage] = useState(null);
  const [closeIcon, setCloseIcon] = useState(null);
  const books = useSelector((state) => state.books);
  const currentUser = useSelector((state) => state.users.currentUser);
  const myCartItem = useSelector((state) => state.cart);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const book = books.find((book) => book.id === id);

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

  const addToCartHandler = () => {
    if (currentUser)
      dispatch(
        addItem(
          createCart(
            book.title,
            book.writer,
            quantity,
            book.price * quantity,
            id
          )
        )
      );
    else {
      setErrorMessage(warningMessage);
      setCloseIcon("X");
    }
    /*dispatch(
      addItem(
        createCart(book.title, book.writer, quantity, book.price * quantity, id)
      )
    );*/
  };
  const closeError = () => {
    setErrorMessage(null);
    setCloseIcon(null);
  };
  const orderingHandler = () => {
    if (!book.count || !currentUser) {
      setErrorMessage(warningMessage);
      setCloseIcon("X");
      //return;
    } else dispatch(makingOrder({ user: currentUser, book, quantity }));
  };
  //console.log(myCartItem);
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
            {/*<p onClick={closeError}>{errorMessage}</p>*/}
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
          <div className={styles.message}>
            <p>{errorMessage}</p>
            <p className={styles.closeIcon} onClick={closeError}>
              {closeIcon}
            </p>
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
            <button className={styles.cartButton} onClick={addToCartHandler}>
              <img src={shopCart} />
              Add to Cart
            </button>
            {/*<p onClick={closeError}>{errorMessage}</p>*/}
            <button
              className={styles.cartButton}
              /*disabled={!currentUser || !book.count}*/
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
          <div className={styles.message}>
            <p>{errorMessage}</p>
            <p className={styles.closeIcon} onClick={closeError}>
              {closeIcon}
            </p>
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
