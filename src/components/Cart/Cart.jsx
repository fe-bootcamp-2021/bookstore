import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { items } from "./getCartItemsFromLS";
import cartIcon from "../../assets/images/shopping-cart.svg";
import styles from "./Cart.module.css";
import { deleteItem } from "../../redux/ducks/cartItemSlice";

export default function Cart() {
  const [cartItems, setCartItem] = useState(items);
  const [showCartContainer, setShowCartContainer] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.users.currentUser);
  const myCart = useSelector((state) => state.cart);
  console.log(myCart);
  let totalPrice = 0;

  const numberofbooks = myCart.reduce((acc, item) => {
    acc = acc + item.Quantity;
    return acc;
  }, 0);

  const handleItemDelete = (title) => {
    dispatch(deleteItem(title));
  };

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
              totalPrice += item.price;

              return (
                <div key={idx} className={styles.item}>
                  <h4>{item.title}/</h4>
                  <h6>{item.author}/</h6>
                  <div className={styles.counter}>
                    <button className={styles.quantityBtn}>-</button>
                    <p>{item.Quantity}</p>
                    <button className={styles.quantityBtn}>+</button>
                  </div>
                  <h5>/{item.price.toFixed(2)}AMD</h5>
                  <button onClick={() => handleItemDelete(item.title)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <h5>Total Price: {totalPrice.toFixed(2)}</h5>
        </div>
      )}
    </>
  );
}
