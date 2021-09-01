import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleOrders: [],
  cartOrders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    makingOrder() {},

    createOrder(state, action) {
      state.singleOrders.push(action.payload);
    },

    makingCartOrder() {},

    createCartOrder(state, action) {
      state.cartOrders.push(action.payload);
    },
  },
});

export const { makingOrder, createOrder, makingCartOrder, createCartOrder } =
  ordersSlice.actions;
export default ordersSlice.reducer;
