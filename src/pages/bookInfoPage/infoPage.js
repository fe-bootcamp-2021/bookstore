import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../redux/ducks/booksSlice";
import { useState, useEffect } from "react";
import styles from "../bookInfoPage/bookInfo.module.css";
import shopCart from "../../assets/images/shopping-cart(1).svg";
import { useRouteMatch } from "react-router-dom";

function BookInfo(props) {
  const match = useRouteMatch("/books/:bookId");
  const id = match.params.bookId;
  console.log(match);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const books = useSelector((state) => state.books);

  // console.log(books);
  let myBook = books.find((book) => book.id === id);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upperBody}>
          <h1>{myBook.title}</h1>
          <h3>{myBook.writer}(author)</h3>
        </div>
        {/*<div className={styles.container}>*/}
        <div className={styles.image}>
          <img src={myBook.img} />
        </div>
        <div className={styles.body}>
          <h1>{myBook.title}</h1>
          <h3>{myBook.writer}(author)</h3>
          <button className={styles.myButton}>
            <img src={shopCart} />
            ADD TO CART
          </button>
          <div>
            <h2>Description</h2>
            {/*Ajouter ici une paragraphe pour la description*/}
          </div>
          <div>
            <h2>Product Details</h2>
            <p>Published year:{myBook.yearPublished}</p>
          </div>
        </div>
        <div className={styles.lowerBody}>
          <button className={styles.myButton}>
            <img src={shopCart} />
            ADD TO CART
          </button>
          <div>
            <h2>Description</h2>
            {/*Ajouter ici une paragraphe pour la description*/}
          </div>
          <div>
            <h2>Product Details</h2>
            <p>Published year:{myBook.yearPublished}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default BookInfo;
