import styles from "./LightDarkMode.module.css";

import { useDispatch } from "react-redux";
import { toggleBtn } from "../../redux/ducks/lightDarkModeSlice";

export default function LightDarkMode() {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(toggleBtn())} className={styles.toggle}>
      <input type="checkbox" className={styles.checkbox} />
      <span className={styles.ball}></span>
    </div>
  );
}
