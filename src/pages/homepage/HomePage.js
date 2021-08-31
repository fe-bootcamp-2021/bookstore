import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import cn from "classnames";

import styles from "./HomePage.module.css";

import { getBooks } from "../../redux/ducks/booksSlice";
import { signOut } from "../../redux/ducks/usersSlice";
import { makingOrder } from "../../redux/ducks/ordersSlice";

import BookCart from "../../components/BookCart/BookCart";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const { isDark } = useSelector((state) => state);
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
      <div
        className={cn(
          styles.heading,
          { [styles.headingDarkMode]: isDark },
          { [styles.headingLightMode]: !isDark }
        )}
      >
        <h3>Հատուկ Առաջարկ</h3>
      </div>

      <div
        className={cn(
          styles.main,
          { [styles.mainDarkMode]: isDark },
          { [styles.mainLightMode]: !isDark }
        )}
      >
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
