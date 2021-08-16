import { call, put } from 'redux-saga/effects';
import { setBooks, deleteBook } from '../../ducks/booksSlice';
import { requestGetBooks, requestDeleteBook, requestAddBook, requestUpdateBook } from '../requests/books';

export function* handleGetBooks(action) {
    try {
        const res = yield call(requestGetBooks);
        console.log(res)
        const books = Object.keys(res.data).reduce((a,b) => {
            a.push({id: b, ...res.data[b]})
            return a
        }, [])
        yield put(setBooks(books))
    }catch(err) {
        console.log(err)
    }
}

export function* handleDeleteBook(action) {
    try {
        yield call(() => requestDeleteBook(action.payload))
        yield put(deleteBook(action.payload))
    }catch(err) {
        console.log(err)
    }
}

export function* handleAddBook(action) {
    try {
        yield call(() => requestAddBook(action.payload))
        const res = yield call(requestGetBooks)
        const books = Object.keys(res.data).reduce((a,b) => {
            a.push({id: b, ...res.data[b]})
            return a
        }, [])
        yield put(setBooks(books))
    }catch(err) {
        console.log(err)
    }
}

export function* handleUpdateBook(action) {
    try {
        const {id, changes} = action.payload
        yield call(() => requestUpdateBook(id, changes))
        const res = yield call(requestGetBooks)
        const books = Object.keys(res.data).reduce((a,b) => {
            a.push({id: b, ...res.data[b]})
            return a
        }, [])
        yield put(setBooks(books))
    }catch(err) {
        console.log(err)
    }
}