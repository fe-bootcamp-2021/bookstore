import { put, call } from "@redux-saga/core/effects";

import { requestBookOrder, requestCartOrder } from "../requests/order";
import { requestUpdateBook, requestGetBooks } from "../requests/books";
import { setBooks } from "../../ducks/booksSlice";
import { Columns, Repeat } from "react-feather";
import { useSelector } from "react-redux";

export function* handleBookOrder(action) {
  try {
    const { user, book, quantity } = action.payload;

    const response = yield call(() => requestBookOrder(user, book, quantity));

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

export function* handleCartOrder(action) {
  try {
    const { cartBooks, user } = action.payload;
    const { idToken } = user;

    const response = yield call(() => requestCartOrder(user, cartBooks));

    console.log("response", response);

    for (let i = 0; i < response.length; i += 1) {
      if (response && response[i].status === 200) {
        console.log("cartBooks", cartBooks);
        console.log("hasav updatein");

        const bookChangeRes = yield call(() =>
          requestUpdateBook(
            cartBooks[i].id,
            {
              ...cartBooks[i],
              count:
                Number(cartBooks[i].availableCount) -
                Number(cartBooks[i].Quantity),
              availableCount:
                Number(cartBooks[i].availableCount) -
                Number(cartBooks[i].Quantity),
            },
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
    }
  } catch (err) {
    console.log(err);
  }
}
