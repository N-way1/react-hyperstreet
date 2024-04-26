import { useState } from "react";

export default function Color({ colors, onColorChange }) {
  const [selected, setSelected] = useState(null);

  function handleSelected(selected) {
    onColorChange(selected);
    setSelected(selected);
  }
  return (
    <>
      <div className="card">
        <h4 className="font-medium text-main text-2xl pb-6">Colors</h4>
        <div className="card-body">
          {/* Map through the colors array and create rows of five colors */}
          {colors.map((colorRow, index) => (
            <div key={index} className="flex items-center justify-between mb-2">
              {/* Display five colors in each row */}
              {colorRow.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`color drop-shadow w-8 h-8 mr-1 ${
                    selected === color
                      ? "active-color drop-shadow-xl"
                      : undefined
                  }`}
                  onClick={() => handleSelected(color)}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
