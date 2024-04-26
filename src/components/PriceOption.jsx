import React from "react";

export default function PriceOption({ label, value }) {
  return (
    <li className="list-inline-item mb-1">
      <div className="form-check">
        <input
          className=" form-check-input m-1"
          type="radio"
          name="priceRadios"
          id={`priceRadio${value}`}
          value={value}
        />
        <label htmlFor={`priceRadio${value}`}>
          {label}
        </label>
      </div>
    </li>
  );
}
