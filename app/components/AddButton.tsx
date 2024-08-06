"use client";

import React, { useState } from "react";
import Cart from "./icon-cart.svg";
import Image from "next/image";

import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../GlobalRedux/Features/counter/counterSlice";

export default function AddButton({ product }) {
  const [activeProduct, setActiveProduct] = useState(product);
  const dispatch = useDispatch();

  const handleSizeSelect = (event) => {
    const size = event.target.value;
    setActiveProduct((prevProduct) => ({
      ...prevProduct,
      size: size,
    }));
  };

  const handleAddToCart = (product) => {
    // Dispatch the addToCart action with the product details
    dispatch(addToCart(product));
  };
  return (
    <div>
      <select className="border p-2 rounded-md" onChange={handleSizeSelect}>
        <option value="0">Choose size</option>
        {product.sizes.map((size = "24") => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <button
        onClick={() => handleAddToCart(activeProduct)}
        className="btn-primary my-auto py-2 px-6 xl:px-10 rounded-md mt-0"
      >
        <Image
          className="p-0"
          src={Cart}
          alt="Sneakers"
          width={15}
          height={10}
        />
        Add to basket
      </button>
    </div>
  );
}
