import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import cn from "classnames";

import styles from "./HomePage.module.css";

import { getBooks } from "../../redux/ducks/booksSlice";
import { signOut } from "../../redux/ducks/usersSlice";
import { makingOrder } from "../../redux/ducks/ordersSlice";
import Pagination from "../../components/Pagination/pagination";
import BookCart from "../../components/BookCart/BookCart";
import * as constants from "../../constants/constants";
const HomePage = (props) => {
  const [currentBooks, setCurrentBooks] = useState([]);
  const [bookList, setBookList] = useState([]);

  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  const { isDark } = useSelector((state) => state);
  const currentUser = useSelector((state) => state.users.currentUser);

  const history = useHistory();

  useEffect(() => {
    dispatch(getBooks());
    setCurrentBooks(books.slice(0, constants.booksPerPage));
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
        {currentBooks.map((book) => {
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
      <div className={styles.pageList}>
        <div className={styles.myPages}>
          {new Array(Math.ceil(books.length / constants.booksPerPage))
            .fill(0)
            .map((page, index) => {
              return <Pagination index={index + 1} />;
            })}
        </div>
      </div>
    </>
  );
};

export default HomePage;
