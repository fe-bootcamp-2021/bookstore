import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const lightDarkModeSlice = createSlice({
  name: "lightDarkMode",
  initialState,
  reducers: {
    toggleBtn: (state, action) => {
      state = !state;
    },
  },
});

export const { toggleBtn } = cartSlice.actions;
export default lightDarkModeSlice.reducer;
