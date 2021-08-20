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
  ]);
}
