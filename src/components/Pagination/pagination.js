import React from "react";
import { Link } from "react-router-dom";
import styles from "./pagination.module.css";
function Pagination(props) {
  return (
    <Link to={`/pages/${props.index}`}>
      <p className={styles.pagination}>{props.index}</p>
    </Link>
  );
}

export default Pagination;
