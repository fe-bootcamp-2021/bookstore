import { configureStore, combineReducers } from "@reduxjs/toolkit";

import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/rootSaga";

import books from './ducks/booksSlice';

const sagaMiddlware = createSagaMiddleware();

const reducer = combineReducers({
    books
})

const store = configureStore({
    reducer,
    middleware: [sagaMiddlware]
})

sagaMiddlware.run(rootSaga)

export default store;