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

    increment: (state, action) => {
      const index = state.findIndex((item) => item.title === action.payload);

      if (Number(state[index].warehouseCount) > Number(state[index].Quantity)) {
        state[index].Quantity += 1;
      }
      // console.log(state[index].warehouseCount);
    },

    decrement: (state, action) => {
      const index = state.findIndex((item) => item.title === action.payload);
      state[index].Quantity -= 1;

      if (Number(state[index].Quantity) === 0) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addItem, deleteItem, increment, decrement } =
  cartItemSlice.actions;
export default cartItemSlice.reducer;
