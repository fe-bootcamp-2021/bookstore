import { call, put } from 'redux-saga/effects';
import { setBooks } from '../../ducks/booksSlice';
import { requestGetBooks } from '../requests/books';

export function* handleGetBooks(action) {
    try {
        const res = yield call(requestGetBooks);
        console.log('res', res)
        const { data } = res;
        yield put(setBooks(data))
    }catch(err) {
        console.log(err)
    }
}