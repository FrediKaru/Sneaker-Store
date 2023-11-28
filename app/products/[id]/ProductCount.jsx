"use client";

import React, { useState } from "react";

export default function ProductCount() {
  const [count, setCount] = useState(1);

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  function showDropdownOptions() {
    document.getElementById("options").classList.toggle("hidden");
    document.getElementById("arrow-up").classList.toggle("hidden");
    document.getElementById("arrow-down").classList.toggle("hidden");
  }

  return (
    <div>
      <div className=" flex space-x-10 btn-secondary my-auto py-2 px-2 rounded-md">
        <p className="text-primary" onClick={incrementCount}>
          +
        </p>
        <p>{count}</p>
        <a className="text-primary" onClick={decrementCount}>
          -
        </a>
      </div>
      <div class="flex flex-row justify-center min-h-screen pt-4 bg-gray-100 min-w-screen">
        <div class="flex-none p-2">
          <button
            onClick={showDropdownOptions}
            class="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600"
          >
            <span class="select-none">Select size</span>

            <svg
              id="arrow-down"
              class="hidden w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              id="arrow-up"
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            id="options"
            class="hidden w-48 py-2 mt-2 bg-white rounded-lg shadow-xl"
          >
            <a
              href="#"
              class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              32 EU
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              36 EU
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              41 EU
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
