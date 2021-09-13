import React from "react";
import { useState, useEffect } from "react";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import { getBooks } from "../../redux/ducks/booksSlice";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination/pagination";
import BookCart from "../../components/BookCart/BookCart";
import { loaderSource } from "../bookdetailpage/constants";
import * as constants from "../../constants/constants";
import cn from "classnames";
import styles from "./paginationpage.module.css";
const Page = (props) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();
  const books = useSelector((state) => state.books);
  const { isDark } = useSelector((state) => state);
  const pageNumber = +match.params.page;
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const bookCardClickHandler = (book) => {
    history.push({
      pathname: `/book/${book.id}`,
      state: { book },
    });
  };
  const myBooks = books.slice(
    (pageNumber - 1) * constants.booksPerPage,
    pageNumber * constants.booksPerPage
  );
  /*console.log(+match.params.page);
  console.log(match.params);
  console.log(match);
  console.log(books);*/
  //console.log(books.slice((pageNumber - 1) * 3, pageNumber * 3));
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
      {myBooks.length ? (
        <div
          className={cn(
            styles.main,
            { [styles.mainDarkMode]: isDark },
            { [styles.mainLightMode]: !isDark }
          )}
        >
          {/* <button onClick={() => dispatch(getBooks())}>fetch books</button> */}
          {myBooks.map((book) => {
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
      ) : (
        <div className={styles.loader2}>
          <img src={loaderSource} />
        </div>
      )}
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

export default Page;
