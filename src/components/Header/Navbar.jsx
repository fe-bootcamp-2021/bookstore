import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { signOut } from "../../redux/ducks/usersSlice";
import * as constants from "../../constants/constants";
import styles from "./Navbar.module.css";
import Cart from "../Cart/Cart";

import logo from "../../assets/images/logo.jpg";
import menuIcon from "../../assets/images/menu_icon.svg";
import closeIcon from "../../assets/images/close_burger.svg";
import useWindowWidth from "../../hooks/useWindowWidth";
import LightDarkMode from "../LightDarkMode/LightDarkMode";

export default function Navbar() {
  const [burgerMenuIconVisibility, setBurgerMenuIconVisibility] =
    useState(true);
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(true);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cartItems, setCartItem] = useState([]);
  const [pathName, setPathName] = useState("/");

  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const history = useHistory();

  const width = useWindowWidth();

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const setHistoryName = () => {
    setPathName(history.location.pathname);
  };

  return (
    <>
      <div className={styles.mainNavbar}>
        <div onClick={setHistoryName}>
          <Link to={constants.homePageUrl}>
            <img className={styles.logo} src={logo} />
          </Link>
        </div>

        <div
          onClick={() => setMobileMenuVisibility(!mobileMenuVisibility)}
          hidden={burgerMenuIconVisibility}
          className={styles.menuIcon}
        >
          <img width="30px" hidden={!mobileMenuVisibility} src={menuIcon} />
          <img width="30px" hidden={mobileMenuVisibility} src={closeIcon} />
        </div>
        {/* <Link> */}
        <Cart />
        {/* </Link> */}

        <div className={styles.loggerDepartments}>
          <div className={styles.departments}>
            <h4
              onClick={setHistoryName}
              className={cn(styles.department, {
                [styles.currentPage]:
                  history.location.pathname === constants.homePageUrl,
              })}
            >
              <Link to={constants.homePageUrl}>BOOKS</Link>
            </h4>

            <h4
              onClick={setHistoryName}
              className={cn(styles.department, {
                [styles.currentPage]:
                  history.location.pathname === constants.salePageUrl,
              })}
            >
              <Link to={constants.salePageUrl}>SALE</Link>
            </h4>

            <h4
              onClick={setHistoryName}
              className={cn(styles.department, {
                [styles.currentPage]:
                  history.location.pathname === constants.newsPageUrl,
              })}
            >
              <Link to={constants.newsPageUrl}>NEWS</Link>
            </h4>

            <h4
              onClick={setHistoryName}
              className={cn(styles.department, {
                [styles.currentPage]:
                  history.location.pathname === constants.aboutPageUrl,
              })}
            >
              <Link to={constants.aboutPageUrl}>ABOUT</Link>
            </h4>

            {currentUser
              ? currentUser.isAdmin && (
                  <h4
                    onClick={setHistoryName}
                    className={cn(styles.adminPageDep, {
                      [styles.currentPage]:
                        history.location.pathname === constants.adminPageUrl,
                    })}
                  >
                    <Link to={constants.adminPageUrl}>ADMIN PAGE</Link>
                  </h4>
                )
              : null}
          </div>

          <div className={styles.navbarLoggers}>
            {/* <div> */}
            {currentUser ? (
              <Link style={{ margin: "0" }} onClick={() => dispatch(signOut())}>
                SignOut
              </Link>
            ) : (
              <Link to={constants.authPageUrl}>LogIn</Link>
            )}
            {/* </div> */}
          </div>
        </div>
        <LightDarkMode />
      </div>
      <div
        hidden={mobileMenuVisibility || width > 600}
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
        {currentUser
          ? currentUser.isAdmin && (
              <Link to={constants.adminPageUrl}>
                <h4 className={styles.adminPageDep}>ADMIN PAGE</h4>
              </Link>
            )
          : null}
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
