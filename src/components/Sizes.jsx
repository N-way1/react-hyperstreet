import { useState } from "react";

export default function Sizes({ sizes }) {
  const [selectedSize, setSelectedSize] = useState("37");

  function handleSizeChange(size) {
    setSelectedSize(size);
  }
  return (
    <>
      <div className="card mb-2">
        <h4 className="font-medium text-main text-2xl pb-6">Size</h4>
        <div className="card-body">
          {sizes.map((size, index) => (
            <li key={index} className="inline-block mb-1 mr-1">
              <button
                type="button"
                className={`w-10 h-10 rounded-3xl border border-main ${
                  selectedSize === size
                    ? "bg-main text-white"
                    : " text-main bg-white"
                }`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
