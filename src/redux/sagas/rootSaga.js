import { takeLatest } from "@redux-saga/core/effects";
import { handleGetBooks } from "./handlers/books";
import { getBooks } from "../ducks/booksSlice";

export function* watcherGetBooks() {
    yield takeLatest(getBooks.type, handleGetBooks);
};