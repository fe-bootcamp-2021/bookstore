import { put, call } from "@redux-saga/core/effects";

import { requestBookOrder } from "../requests/order";
import { requestUpdateBook, requestGetBooks } from "../requests/books";
import { setBooks } from "../../ducks/booksSlice";

export function* handleBookOrder(action) {
  try {
    const { user, myCart, quantity } = action.payload;

    const { id, idToken } = user;

    myCart.forEach((item) => {    
        //   dispatch(
        //     makingOrder({ user: currentUser, book: item, quantity: item.Quantity })
        //   )
        const response = yield call(() => requestBookOrder(user, item, item.quantity));
        }
    );

    

    if (response && response.status === 200) {
      const bookChangeRes = yield call(() =>
        requestUpdateBook(
          book.id,
          { ...book, count: book.count - quantity },
          user.idToken
        )
      );
      if (bookChangeRes && bookChangeRes.status === 200) {
        const allBooksRes = yield call(requestGetBooks);

        if (allBooksRes && allBooksRes.status === 200) {
          const books = Object.keys(allBooksRes.data).reduce((a, b) => {
            a.push({ id: b, ...allBooksRes.data[b] });
            return a;
          }, []);
          yield put(setBooks(books));
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}
