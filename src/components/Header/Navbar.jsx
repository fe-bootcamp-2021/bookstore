import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/ducks/usersSlice";

import * as constants from "../../constants/constants";
import styles from "./Navbar.module.css";
import Cart from "../Cart/Cart";

import logo from "../../assets/images/logo.jpg";
import menuIcon from "../../assets/images/menu_icon.svg";
import closeIcon from "../../assets/images/close_burger.svg";
// import cartIcon from "../../assets/images/shopping_cart.svg";

export default function Navbar() {
  const [burgerMenuIconVisibility, setBurgerMenuIconVisibility] =
    useState(true);
  const [mobileMenuVisibilty, setMobileMenuVisibility] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cartItems, setCartItem] = useState([]);

  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    // const tempCartItems = JSON.parse(localStorage.getItem("cartItem"));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  });

  // const cartClickhandler = () => {
  //   if (currentUser) {
  //     history.push("/cart");
  //   } else {
  //     history.push("/auth");
  //     setCartItem([...cartItems, { 1: 1 }]);
  //   }
  // };

  return (
    <>
      <div className={styles.mainNavbar}>
        <Link to="/">
          <div>
            <img className={styles.logo} src={logo} />
          </div>
        </Link>
        <div
          onClick={() => setMobileMenuVisibility(!mobileMenuVisibilty)}
          hidden={burgerMenuIconVisibility}
          className={styles.menuIcon}
        >
          <img width="30px" hidden={!mobileMenuVisibilty} src={menuIcon} />
          <img width="30px" hidden={mobileMenuVisibilty} src={closeIcon} />
        </div>
        {/* <Link> */}
        <Cart />
        {/* </Link> */}

        <div className={styles.loggerDepartments}>
          <div className={styles.departments}>
            <Link to={constants.booksPageUrl}>
              <h4 className={styles.department}>BOOKS</h4>
            </Link>
            <Link to={constants.salePageUrl}>
              <h4 className={styles.department}>SALE</h4>
            </Link>
            <Link to={constants.newsPageUrl}>
              <h4 className={styles.department}>NEWS</h4>
            </Link>
            <Link to={constants.aboutPageUrl}>
              <h4 className={styles.department}>ABOUT</h4>
            </Link>
          </div>

          <div className={styles.navbarLoggers}>
            <div>
              {currentUser ? (
                <Link
                  style={{ margin: "0" }}
                  onClick={() => dispatch(signOut())}
                >
                  SignOut
                </Link>
              ) : (
                <Link to={constants.authPageUrl}>LogIn</Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        hidden={mobileMenuVisibilty || windowWidth > 600}
        className={styles.mobileMenu}
      >
        <Link to={constants.booksPageUrl}>
          <h4 className={styles.mobileDepartment}>BOOKS</h4>
        </Link>
        <Link to={constants.salePageUrl}>
          <h4 className={styles.mobileDepartment}>SALE</h4>
        </Link>
        <Link to={constants.newsPageUrl}>
          <h4 className={styles.mobileDepartment}>NEWS</h4>
        </Link>
        <Link to={constants.aboutPageUrl}>
          <h4 className={styles.mobileDepartment}>ABOUT</h4>
        </Link>
        <div className={styles.logBtnsContainer}>
          <div>
            {currentUser ? (
              <p style={{ margin: "0" }} onClick={() => dispatch(signOut())}>
                SignOut
              </p>
            ) : (
              <Link to={constants.authPageUrl}>LogIn</Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
