import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const lightDarkModeSlice = createSlice({
  name: "lightDarkMode",
  initialState,
  reducers: {
    toggleBtn: (state) => {
      return !state;
    },
  },
});

export const { toggleBtn } = lightDarkModeSlice.actions;
export default lightDarkModeSlice.reducer;
