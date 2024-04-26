import { useState } from "react";

export default function Size({ sizes }) {
  const [selected, setSelected] = useState(0);

  function handleSelected(selected) {
    console.log(selected);
    setSelected(selected);
  }
  return (
    <>
      <div className="col-span-5 pt-5">
        <div className="card">
          <h4 className="font-medium text-main text-2xl pb-6">Size</h4>
          <div className="card-body">
            <div className="overflow-x-auto">
              <div className="flex flex-wrap gap-0">
                {sizes.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-wrap gap-0">
                    {row.map((size, colIndex) => (
                      <button
                        key={colIndex}
                        className={`w-16 h-16 px-4 py-2 font-semibold text-blue border border-gray-300 hover:text-xl hover:text-main${
                          selected === size
                            ? " active text-main"
                            : undefined
                        }`}
                        onClick={() =>
                          handleSelected(size)
                        }
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
