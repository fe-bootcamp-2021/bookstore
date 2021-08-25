import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes/pageRoutes";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/footer/Footer";

const BookStore = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default BookStore;