import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const booksSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        getBooks() {},
        setBooks(state, action) {
            state.push(...action.payload)
        }
    }

});

export const { getBooks, setBooks } = booksSlice.actions;

export default booksSlice.reducer;