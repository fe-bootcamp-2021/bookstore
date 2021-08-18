import React, { useState } from "react";

import logo from "../../assets/images/logo.jpg";
import menuIcon from "../../assets/images/menu-icon.svg";
import closeIcon from "../../assets/images/close_burger.svg";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [burgerMenuIconHidden, setBurgerMenuIcon] = useState(true);
  const [mobileMenuIsHidden, setMobileMenu] = useState(true);

  return (
    <>
      <div className={styles.mainNavbar}>
        <div>
          <img className={styles.logo} src={logo} />
        </div>
        <div
          onClick={() => setMobileMenu(!mobileMenuIsHidden)}
          hidden={burgerMenuIconHidden}
          className={styles.menuIcon}
        >
          <img hidden={!mobileMenuIsHidden} src={menuIcon} />
          <img hidden={mobileMenuIsHidden} src={closeIcon} />
        </div>

        <div className={styles.loggerDepartments}>
          <div className={styles.departments}>
            <h4 className={styles.department}>BOOKS</h4>
            <h4 className={styles.department}>SALE</h4>
            <h4 className={styles.department}>NEWS</h4>
            <h4 className={styles.department}>ABOUT</h4>
          </div>
          <div className={styles.navbarLoggers}>
            <h6>LOG IN</h6>
            <h6>SIGN UP</h6>
          </div>
        </div>
      </div>
      <div hidden={mobileMenuIsHidden} className={styles.mobileMenu}>
        <h4 className={styles.mobileDepartment}>BOOKS</h4>
        <h4 className={styles.department}>SALE</h4>
        <h4 className={styles.department}>NEWS</h4>
        <h4 className={styles.department}>ABOUT</h4>
        <h6>LOG IN</h6>
        <h6>SIGN UP</h6>
      </div>
    </>
  );
}
