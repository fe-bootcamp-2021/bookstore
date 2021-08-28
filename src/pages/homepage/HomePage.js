import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../redux/ducks/booksSlice";
import { signOut } from "../../redux/ducks/usersSlice";

import { makingOrder } from "../../redux/ducks/ordersSlice";
import { Link, useHistory } from "react-router-dom";

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
      <h3>HomePage</h3>
      <button onClick={() => dispatch(getBooks())}>fetch books</button>
      {books.map((book) => {
        return (
          <div
            key={book.id}
            style={{ width: "300px", border: "1px solid black" }}
          >
            <p>{book.title}</p>
            <p>{book.writer}</p>
            <p>{book.price}</p>

            <button onClick={() => bookCardClickHandler(book)}>see more</button>
          </div>
        );
      })}
    </>
  );
};

export default HomePage;
