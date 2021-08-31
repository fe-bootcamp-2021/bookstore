// import styles from "./LightDarkMode.module.css";

import { useDispatch } from "react-redux";
import { toggleBtn } from "../../redux/ducks/lightDarkModeSlice";

export default function LightDarkMode() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(toggleBtn())}>light/dark</button>
    </>
  );
}
