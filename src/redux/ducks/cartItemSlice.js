import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartItemSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const cartIndex = state.findIndex(
        (cart) => cart.title === action.payload.title
      );
      if (cartIndex === -1) state.push(action.payload);
      else state.splice(cartIndex, 1, action.payload);
    },

    deleteItem: (state, action) => {
      const index = state.findIndex((cart) => cart.title === action.payload);

      state.splice(index, 1);
    },
  },
});

export const { addItem, deleteItem } = cartItemSlice.actions;
export default cartItemSlice.reducer;
