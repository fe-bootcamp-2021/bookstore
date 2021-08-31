import { useSelector } from "react-redux";
import cn from "classnames";

import styles from "./BookCart.module.css";

import img from "../../pages/about/images/azg.jpg";
import background from "../../assets/images/background.jpg";

export default function BookCart(props) {
  const { isDark } = useSelector((state) => state);

  return (
    <div key={props.id} className={cn(
      styles.book,
      { [styles.bookLightTherme]: !isDark }
    )}>
      <div className={styles.bookImage}>
        <div className={styles.background}>
          <p style={{ marginTop: "10px" }}>{props.writer}</p>
        </div>
        <img alt="" className={styles.bookImg} src={props.img}></img>
      </div>
      <p style={{ width: "80%", margin: "0 auto" }}>{props.title}</p>
      <p>{props.price} դրամ</p>
      <button className={styles.button} onClick={props.onClick}>
        see more
      </button>
    </div>
  );
}
