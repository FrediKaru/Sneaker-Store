"use client";

import React from "react";
import Cart from "./icon-cart.svg";
import Image from "next/image";

import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../GlobalRedux/Features/counter/counterSlice";

export default function AddButton({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch the addToCart action with the product details
    dispatch(addToCart(product));
  };
  return (
    <button
      onClick={() => handleAddToCart(product)}
      className="btn-primary my-auto py-2 px-6 xl:px-10 rounded-md mt-0"
    >
      <Image className="p-0" src={Cart} alt="Sneakers" width={15} height={10} />
      Add to basket
    </button>
  );
}
