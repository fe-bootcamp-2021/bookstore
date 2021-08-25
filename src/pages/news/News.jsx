import styles from "./News.module.css";
import img from "../about/images/azg.jpg";

export default function News(props) {
  return (
      <ul className={styles.news}>
        <li className={styles.newsItem}>
          <div className={styles.newsItemContent}>
            <div  className={styles.newsItemPart}>
              <span>25.08.2021</span>
              <h3 className={styles.title}>Titleeee</h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, aut. Minima at temporibus eaque velit dicta
                consequuntur aliquid facilis id voluptatem dignissimos, vel
                explicabo ipsam, error doloremque fuga porro sapiente maxime
                quos fugiat mollitia magnam tempora maiores, dolorum fugit?
                Animi ipsa velit natus aut maiores, harum expedita quasi culpa
                quod.
              </p>
            </div>
            <div className={styles.newsItemPart}>
              <img src={img}></img>
            </div>
          </div>
          <hr></hr>
        </li>
      </ul>
  );
}
