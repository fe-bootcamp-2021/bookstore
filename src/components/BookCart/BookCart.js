import styles from "./BookCart.module.css";

export default function BookCart(props) {
  return (
    <div key={props.id} className={styles.book}>
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
