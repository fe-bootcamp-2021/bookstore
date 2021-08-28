import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { items } from "./getCartItemsFromLS";
import cartIcon from "../../assets/images/shopping_cart.svg";
import styles from "./Cart.module.css";

export default function Cart() {
  const { currentUser } = useSelector((state) => state.users);
  const [cartItems, setCartItem] = useState(items);
  const [showCartContainer, setShowCartContainer] = useState(false);
  const myCarts = useSelector((state) => state.cart);
  const numberofbooks = myCarts.reduce((acc, item) => {
    acc = acc + item.Quantity;
    return acc;
  }, 0);
  console.log(numberofbooks);
  const history = useHistory();

  //   const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  //   const cartClickhandler = () => {
  //     setShowCartContainer(!showCartContainer)
  //   };

  return (
    <>
      <div
        onClick={() => setShowCartContainer(!showCartContainer)}
        className={styles.cartIcon}
      >
        <img height="100%" src={cartIcon}></img>
        <div className={styles.countDiv}>{numberofbooks}</div>
      </div>

      {showCartContainer && <div className={styles.cartContainer}></div>}
    </>
  );
}
