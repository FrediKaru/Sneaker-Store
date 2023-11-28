"use client";

import React from "react";

import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../GlobalRedux/Features/counter/counterSlice";

export default function RemoveButton({ product }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    // Dispatch the addToCart action with the product details
    dispatch(removeFromCart(product));
  };
  return (
    <div>
      <button
        onClick={() => handleRemoveFromCart(product)}
        className="ml-auto text-secondary"
      >
        Remove X
      </button>
    </div>
  );
}
