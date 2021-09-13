import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getNews() {},

    setNews(state, action) {
      return action.payload;
    },

    deletingNews() {},

    deleteNews(state, action) {
      const newsIndex = state.findIndex((news) => news.id === action.payload);
      state.splice(newsIndex, 1);
      return state;
    },

    addingNews() {},

    addNews(state, action) {
      state.push(action.payload); // immer retuns new object )
    },

    updatingNews() {},
    // updateBook(state, action) {
    //     return state
    // }
  },
});

export const {
  getNews,
  setNews,
  deleteNews,
  deletingNews,
  addingNews,
  addNews,
  updatingNews,
  updateNews,
} = newsSlice.actions;

export default newsSlice.reducer;
