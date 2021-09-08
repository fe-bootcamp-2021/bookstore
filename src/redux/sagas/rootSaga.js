import { takeLatest, all, fork } from "@redux-saga/core/effects";

import {
  handleGetBooks,
  handleDeleteBook,
  handleAddBook,
  handleUpdateBook,
} from "./handlers/books";

import {
  getBooks,
  deletingBook,
  addingBook,
  updatingBook,
} from "../ducks/booksSlice";

import { handleSignUp, handleSignIn, handleAutoSignIn } from "./handlers/users";
import { signingUp, signingIn, autoSigningIn } from "../ducks/usersSlice";
import { makingOrder, makingCartOrder } from "../ducks/ordersSlice";
import { handleBookOrder, handleCartOrder } from "./handlers/order";

function* watcherMakeOrder() {
  yield takeLatest(makingOrder.type, handleBookOrder);
}

function* watcherMakingCartOrder() {
  yield takeLatest(makingCartOrder.type, handleCartOrder);
}

function* watcherAutoSignIn() {
  yield takeLatest(autoSigningIn.type, handleAutoSignIn);
}

function* watcherSigningIn() {
  yield takeLatest(signingIn.type, handleSignIn);
}

function* watcherSigningUp() {
  yield takeLatest(signingUp.type, handleSignUp);
}

function* watcherGetBooks() {
  yield takeLatest(getBooks.type, handleGetBooks);
}

function* watcherDeleteBook() {
  yield takeLatest(deletingBook.type, handleDeleteBook);
}

function* watcherAddBook() {
  yield takeLatest(addingBook.type, handleAddBook);
}

function* watcherUpdateBook() {
  yield takeLatest(updatingBook.type, handleUpdateBook);
}

export default function* rootSaga() {
  yield all([
    watcherGetBooks(),
    watcherDeleteBook(),
    watcherAddBook(),
    watcherUpdateBook(),
    watcherSigningUp(),
    watcherSigningIn(),
    watcherAutoSignIn(),
    watcherMakeOrder(),
    watcherMakingCartOrder(),
  ]);
}
