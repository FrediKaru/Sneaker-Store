"use client";

import React from "react";
import Image from "next/image";

import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";

// import components
import RemoveButton from "../components/RemoveButton";

async function getProducts() {
  const res = await fetch("http://localhost:4000/products");
  return res.json();
}

export default function Checkout() {
  const cartTotal = useSelector((state: RootState) => state.counter.cartTotal);
  const deliveryCost = useSelector(
    (state: RootState) => state.counter.deliveryCost
  );
  const shoppingCart = useSelector(
    (state: RootState) => state.counter.shoppingCart
  );

  return (
    <div className="md:flex mx-7 md:space-x-4">
      <div className="md:w-3/4 py-8">
        <h1 className="text-2xl font-bold mb-4">My bag</h1>
        <div>
          {shoppingCart.length < 1 ? (
            <h3>Basket is empty</h3>
          ) : (
            shoppingCart.map((product) => (
              <div
                key={product.id}
                className="flex my-4 p-4 border-b border-gray-300"
              >
                <div>
                  <Image
                    src={`/images/${product.id}.jpg`}
                    alt="Product Image"
                    sizes="100vw"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="flex-grow space-y-1">
                  <div className="ml-5">
                    <p className="text-black font-semibold">
                      €{product.price.toFixed(2)}
                    </p>
                    <div className="font-normal">
                      <div className="text-gray-800 flex gap-2">
                        <p className="uppercase">{product.company}</p>
                        <p>{product.name}</p>
                      </div>
                      <p>{product.size}</p>
                      <p className="text-green-600 mt-4">In stock</p>
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Select Size
                      </label>
                    </div>
                  </div>
                </div>
                <RemoveButton product={product} />
              </div>
            ))
          )}
        </div>
        <p className="text-2x1">Free standard delivery</p>
      </div>

      <div className="md:w-1/3 lg:w-1/4 bg-gray-100 p-6 rounded-md">
        <h2 className="text-3xl font-semibold mb-4 pb-3 text-black border-b border-gray-300">
          Total
        </h2>

        <div className="flex justify-between space-x-8">
          <h4 className="md:text-md mb-2">Sub-total </h4>
          <span className="font-bold text-gray-600">
            €{cartTotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <h4 className="text-md mb-2">Delivery</h4>
          <span className="font-bold text-gray-600">€{deliveryCost}</span>
        </div>
        <div className="flex justify-between space-x-8">
          <h4 className="md:text-md mb-2">Total </h4>
          <span className="font-bold text-gray-600">
            €{cartTotal.toFixed(2)}
          </span>
        </div>
        <p>The prices shown include VAT.</p>

        <button className="w-full py-3 bg-black text-white hover:bg-secondary-dark flex items-center justify-center  tracking-widest mt-6">
          Checkout
        </button>
      </div>
    </div>
  );
}
