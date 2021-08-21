import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.jpg";
import menuIcon from "../../assets/images/menu-icon.svg";
import closeIcon from "../../assets/images/close_burger.svg";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [burgerMenuIconHidden, setBurgerMenuIcon] = useState(true);
  const [mobileMenuIsHidden, setMobileMenu] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
        <div className={styles.cartContainer}>
          <img
            height="100%"
            src="/static/media/shopping-cart(1).95534b44.svg"
          ></img>
          <div className={styles.countDiv}>0</div>
        </div>

        <div className={styles.loggerDepartments}>
          <div className={styles.departments}>
            <h4 className={styles.department}>BOOKS</h4>
            <h4 className={styles.department}>SALE</h4>
            <h4 className={styles.department}>NEWS</h4>
            <h4 className={styles.department}>ABOUT</h4>
          </div>

          <div className={styles.navbarLoggers}>
            <button className={styles.logSignButton}>LOG IN</button>
            <button className={styles.logSignButton}>SIGN UP</button>
          </div>
        </div>
      </div>
      <div
        hidden={mobileMenuIsHidden || windowWidth > 600}
        className={styles.mobileMenu}
      >
        <h4 className={styles.mobileDepartment}>BOOKS</h4>
        <h4 className={styles.mobileDepartment}>SALE</h4>
        <h4 className={styles.mobileDepartment}>NEWS</h4>
        <h4 className={styles.mobileDepartment}>ABOUT</h4>
        <div className={styles.logBtnsContainer}>
          <button className={styles.logSignButton}>LOG IN</button>
          <button className={styles.logSignButton}>SIGN UP</button>
        </div>
      </div>
    </>
  );
}
