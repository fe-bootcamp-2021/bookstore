import React from "react";
import { BookLoader } from "react-awesome-loaders";
import styles from "../bookLoader/loader.module.css";
function MyLoader() {
  return (
    <div className={styles.bookLoader}>
      <BookLoader textColor={"#FFFFFF"} desktopSize={"50px"} />
      <p>Loading...</p>
    </div>
  );
}

export default MyLoader;
