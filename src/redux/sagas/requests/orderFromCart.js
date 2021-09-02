import axios from "axios";

const dbUrl = process.env.REACT_APP_FIREBASE_DB_URL;

export function requestBookOrderFromCart(user, myCart) {
  const { email, userName, mobile, localId, idToken } = user;

  const cartData = myCart.map((book) => ({
    email,
    userName,
    mobile,
    localId,
    quantity,
    book: { title: book.title, id: book.id },
    orderedAt: new Date().toString(),
  }));

  return axios.all(
    axios.request({
      method: "post",
      url: `${dbUrl}/orders.json?auth=${idToken}`,
      data,
    })
  );
}
