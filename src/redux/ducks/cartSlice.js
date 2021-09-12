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

      if (Number(state[index].availableCount) > Number(state[index].Quantity)) {
        state[index].Quantity = Number(state[index].Quantity) + 1;
      }
    },

    decrement: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);

      state[index].Quantity = Number(state[index].Quantity) - 1;

      if (Number(state[index].Quantity) === 0) {
        state.splice(index, 1);
      }
    },

    clearCart: (state, action) => {
      state.length = 0;
      console.log("state", state);
    },
  },
});

export const { addItem, deleteItem, increment, decrement, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
