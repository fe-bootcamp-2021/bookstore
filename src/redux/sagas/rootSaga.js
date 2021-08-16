import { takeLatest, all, fork } from "@redux-saga/core/effects";
import { handleGetBooks, handleDeleteBook, handleAddBook } from "./handlers/books";
import { getBooks, deletingBook, addingBook } from "../ducks/booksSlice";

function* watcherGetBooks() {
    yield takeLatest(getBooks.type, handleGetBooks);
};

function* watcherDeleteBook() {
    yield takeLatest(deletingBook.type, handleDeleteBook)
}

function* watcherAddBook() {
    yield takeLatest(addingBook.type, handleAddBook)
}

export default function* rootSaga () {
    yield all([
        watcherGetBooks(),
        watcherDeleteBook(),
        watcherAddBook()
    ])
}