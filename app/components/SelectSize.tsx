"use client";
import React from "react";

function showDropdownOptions() {
  document.getElementById("options").classList.toggle("hidden");
  document.getElementById("arrow-up").classList.toggle("hidden");
  document.getElementById("arrow-down").classList.toggle("hidden");
}
export default function SelectSize({ sizes }) {
  return (
    <div>
      <select className="border p-2 rounded-md">
        <option value="0">Choose size</option>
        {sizes.map((size = "24") => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}
