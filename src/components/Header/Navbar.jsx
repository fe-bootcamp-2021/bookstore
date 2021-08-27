import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../../redux/ducks/usersSlice";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../assets/images/logo.jpg";
import menuIcon from "../../assets/images/menu_icon.svg";
import closeIcon from "../../assets/images/close_burger.svg";
// import cartIcon from "../../assets/images/shopping_cart.svg";

import styles from "./Navbar.module.css";
import Cart from "../Cart/Cart";

export default function Navbar() {
  const [burgerMenuIconHidden, setBurgerMenuIcon] = useState(true);
  const [mobileMenuIsHidden, setMobileMenu] = useState(true);
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
          onClick={() => setMobileMenu(!mobileMenuIsHidden)}
          hidden={burgerMenuIconHidden}
          className={styles.menuIcon}
        >
          <img width="30px" hidden={!mobileMenuIsHidden} src={menuIcon} />
          <img width="30px" hidden={mobileMenuIsHidden} src={closeIcon} />
        </div>
        {/* <Link> */}
        <Cart />
        {/* </Link> */}

        <div className={styles.loggerDepartments}>
          <div className={styles.departments}>
            <Link to="/books">
              <h4 className={styles.department}>BOOKS</h4>
            </Link>
            <Link to="/sale">
              <h4 className={styles.department}>SALE</h4>
            </Link>
            <Link to="/news">
              <h4 className={styles.department}>NEWS</h4>
            </Link>
            <Link to="/about">
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
                <Link to="/auth">LogIn</Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        hidden={mobileMenuIsHidden || windowWidth > 600}
        className={styles.mobileMenu}
      >
        <Link to="/books">
          <h4 className={styles.mobileDepartment}>BOOKS</h4>
        </Link>
        <Link to="/sale">
          <h4 className={styles.mobileDepartment}>SALE</h4>
        </Link>
        <Link to="news">
          <h4 className={styles.mobileDepartment}>NEWS</h4>
        </Link>
        <Link to="/about">
          <h4 className={styles.mobileDepartment}>ABOUT</h4>
        </Link>
        <div className={styles.logBtnsContainer}>
          <div>
            {currentUser ? (
              <p style={{ margin: "0" }} onClick={() => dispatch(signOut())}>
                SignOut
              </p>
            ) : (
              <Link to="/auth">LogIn</Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
