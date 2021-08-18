import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../components/footer/Footer";
import Navbar from "../../Header/Navbar";
import { getBooks } from "../../redux/ducks/booksSlice";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  console.log("books", books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      <Navbar />
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
          </div>
        );
      })}

      <Footer />
    </>
  );
};

export default HomePage;
