import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../redux/ducks/booksSlice";
import { signOut } from "../../redux/ducks/usersSlice";

import styles from "./HomePage.module.css";

import { makingOrder } from "../../redux/ducks/ordersSlice";
import { Link, useHistory } from "react-router-dom";
import BookCart from "../../components/BookCart/BookCart";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const currentUser = useSelector((state) => state.users.currentUser);

  console.log("books", books);
  const history = useHistory();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const bookCardClickHandler = (book) => {
    history.push({
      pathname: `/book/${book.id}`,
      state: { book },
    });
  };

  return (
    <>
      <div className={styles.heading}>
        <h3>Հատուկ Առաջարկ</h3>
      </div>

      <div className={styles.main}>
        {/* <button onClick={() => dispatch(getBooks())}>fetch books</button> */}
        {books.map((book) => {
          return (
            <BookCart
              key={book.id}
              title={book.title}
              writer={book.writer}
              price={book.price}
              img={book.img}
              onClick={() => bookCardClickHandler(book)}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
