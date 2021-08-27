import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { items } from "./getCartItemsFromLS";
import cartIcon from "../../assets/images/shopping-cart.svg";
import styles from "./Cart.module.css";

export default function Cart() {
  const [cartItems, setCartItem] = useState(items);
  const [showCartContainer, setShowCartContainer] = useState(false);

  const currentUser = useSelector((state) => state.users.currentUser);
  const myCart = useSelector((state) => state.cart);
  console.log(myCart);

  const numberofbooks = myCart.reduce((acc, item) => {
    acc = acc + item.Quantity;
    return acc;
  }, 0);
  console.log(numberofbooks);
  const history = useHistory();

  return (
    <>
      <div
        onClick={() => setShowCartContainer(!showCartContainer)}
        className={styles.cartIcon}
      >
        <img height="100%" src={cartIcon}></img>
        <div className={styles.countDiv}>{numberofbooks}</div>
      </div>

      {showCartContainer && (
        <div className={styles.cartContainer}>
          <h2>Your Bookstore Cart</h2>
          <div className={styles.itemsContainer}>
            {myCart.map((item, idx) => {
              return (
                <div className={styles.item}>
                  <h4>{item.title}</h4>
                  <h6>{item.author}</h6>
                  <button className={styles.quantityBtn}>-</button>
                  <p>{item.Quantity}</p>
                  <button className={styles.quantityBtn}>+</button>
                </div>
              );
            })}
          </div>
          <h5>Total Price:</h5>
        </div>
      )}
    </>
  );
}
