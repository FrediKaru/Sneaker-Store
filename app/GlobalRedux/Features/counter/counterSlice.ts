"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
  company: string;
  discountPrice: number;
  sizes: Array<string>;
  size?: string;
  price: number;
  gender: string;
  description: string;
}

export interface CounterState {
  value: number;
  shoppingCart: Product[];
  cartTotal: number;
  cartItemsNumber: number;
  deliveryCost: number;
}

const initialState: CounterState = {
  value: 0,
  shoppingCart: [],
  cartTotal: 0,
  cartItemsNumber: 0,
  deliveryCost: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addToCart: (state, action) => {
      state.shoppingCart = state.shoppingCart.concat(action.payload);
      state.cartTotal = state.shoppingCart.reduce(
        (total, item) => total + item.price,
        0
      );
      state.cartItemsNumber = state.shoppingCart.length;
    },
    removeFromCart: (state, action) => {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartTotal = state.shoppingCart.reduce(
        (total, item) => total + item.price,
        0
      );
      state.cartItemsNumber = state.shoppingCart.length;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addToCart,
  removeFromCart,
} = counterSlice.actions;

export default counterSlice.reducer;
