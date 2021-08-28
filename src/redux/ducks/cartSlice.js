import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const cartIndex = state.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (cartIndex === -1) state.push(action.payload);
      else state.splice(cartIndex, 1, action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
