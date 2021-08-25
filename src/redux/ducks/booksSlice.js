import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const booksSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getBooks() {},
        setBooks(state, action) {
            return action.payload
        },
        deletingBook() {},
        deleteBook(state, action) {
            const bookIndex = state.findIndex(book => book.id === action.payload)
            state.splice(bookIndex, 1)
            return state
        },
        addingBook(){},
        addBook(state, action) {
            state.push(action.payload) // immer retuns new object )
        },
        updatingBook() {},
        // updateBook(state, action) {
        //     return state
        // }
    }

});

export const { getBooks, setBooks, deleteBook, deletingBook, addingBook,
            addBook, updatingBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;