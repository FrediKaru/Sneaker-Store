"use client";

import React from "react";

import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";

export default function ItemsCount() {
  const cartItemsNumber = useSelector(
    (state: RootState) => state.counter.cartItemsNumber
  );
  return (
    <p className="bg-primary text-white text-sm absolute ml-4 mt-5 rounded-2xl px-2">
      {cartItemsNumber > 0 && cartItemsNumber}
    </p>
  );
}
