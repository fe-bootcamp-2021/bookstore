import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { items } from "./getCartItemsFromLS";
import cartIcon from "../../assets/images/shopping_cart.svg";
import styles from "./Cart.module.css";
import {
  clearCart,
  decrement,
  deleteItem,
  increment,
} from "../../redux/ducks/cartSlice";
import { requestBookOrder } from "../../redux/sagas/requests/order";
import { makingOrder, makingCartOrder } from "../../redux/ducks/ordersSlice";

export default function Cart() {
  const [cartItems, setCartItem] = useState(items);
  const [showCartContainer, setShowCartContainer] = useState(false);
  const myCart = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(makingCartOrder({ user: currentUser, cartBooks: myCart }));
  // }, []);

  console.log("myCart", myCart);

  const history = useHistory();

  let totalPrice = 0;

  const numberOfBooks = myCart.reduce((acc, item) => {
    acc = acc + item.Quantity;
    return acc;
  }, 0);

  const handleItemDelete = (title) => {
    dispatch(deleteItem(title));
  };

  const handleIncrement = (quantity) => {
    dispatch(increment(quantity));
  };

  const handleDecrement = (quantity) => {
    dispatch(decrement(quantity));
  };

  console.log("myCart", myCart);

  const handleMakeOrder = () => {
    dispatch(makingCartOrder({ user: currentUser, cartBooks: myCart }));
    dispatch(clearCart());
  };

  return (
    <>
      <div
        onClick={() => setShowCartContainer(!showCartContainer)}
        className={styles.cartIcon}
      >
        <img height="100%" src={cartIcon}></img>
        <div className={styles.countDiv}>{numberOfBooks}</div>
      </div>
      {showCartContainer && (
        <div className={styles.cartContainer}>
          <h2>Your Bookstore Cart</h2>
          <div className={styles.itemsContainer}>
            {myCart.map((item, idx) => {
              totalPrice += Number(item.price * item.Quantity);

              return (
                <div key={idx} className={styles.item}>
                  <h4>{item.title}/</h4>
                  <h6>{item.author}/</h6>
                  <div className={styles.counter}>
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className={styles.quantityBtn}
                    >
                      -
                    </button>
                    <p>{item.Quantity}</p>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className={styles.quantityBtn}
                    >
                      +
                    </button>
                  </div>
                  <h5>/{Number(item.price * item.Quantity).toFixed(2)}AMD</h5>
                  <button onClick={() => handleItemDelete(item.id)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <h5>Total Price: {Number(totalPrice).toFixed(2)}</h5>
          <button onClick={handleMakeOrder}>Make Order</button>
        </div>
      )}
    </>
  );
}
