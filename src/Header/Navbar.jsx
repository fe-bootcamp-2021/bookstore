import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import menuIcon from "../assets/images/menu-icon.svg";
import closeIcon from "../assets/images/close_burger.svg";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [burgerMenuIconHidden, setBurgerMenuIcon] = useState(true);
  const [mobileMenuIsHidden, setMobileMenu] = useState(true);

  return (
    <>
      <div className={styles.MAINNAVBAR}>
        <div>
          <img className={styles.LOGO} src={logo} />
        </div>
        <div
          onClick={() => setMobileMenu(!mobileMenuIsHidden)}
          hidden={burgerMenuIconHidden}
          className={styles.MENUICON}
        >
          <img hidden={!mobileMenuIsHidden} src={menuIcon} />
          <img hidden={mobileMenuIsHidden} src={closeIcon} />
        </div>

        <div className={styles.LOGGERDEPARTMENTS}>
          <div className={styles.DEPARTMENTS}>
            <h4 className={styles.DEPARTMENT}>BOOKS</h4>
            <h4 className={styles.DEPARTMENT}>SALE</h4>
            <h4 className={styles.DEPARTMENT}>NEWS</h4>
            <h4 className={styles.DEPARTMENT}>ABOUT</h4>
          </div>
          <div className={styles.NAVBARLOGGERS}>
            <h6>LOG IN</h6>
            <h6>SIGN UP</h6>
          </div>
        </div>
      </div>
      <div hidden={mobileMenuIsHidden} className={styles.MOBILEMENU}>
        <h4 className={styles.MOBILEDEPARTMENT}>BOOKS</h4>
        <h4 className={styles.DEPARTMENT}>SALE</h4>
        <h4 className={styles.DEPARTMENT}>NEWS</h4>
        <h4 className={styles.DEPARTMENT}>ABOUT</h4>
        <h6>LOG IN</h6>
        <h6>SIGN UP</h6>
      </div>
    </>
  );
}
