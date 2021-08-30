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

    deleteItem: (state, action) => {
      const index = state.findIndex((cart) => cart.id === action.payload);

      state.splice(index, 1);
    },

    increment: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);

      // console.log(state[index].count, state[index].Quantity);
      if (Number(state[index].availableCount) > Number(state[index].Quantity)) {
        state[index].Quantity += 1;
      }
    },

    decrement: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);

      state[index].Quantity -= 1;

      if (Number(state[index].Quantity) === 0) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addItem, deleteItem, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
