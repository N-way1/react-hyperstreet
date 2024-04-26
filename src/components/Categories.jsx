import { useState } from "react";
export default function Categories({ items }) {
  const [selected, setSelected] = useState(0);

  function handleSelected(selected) {
    console.log(selected);
    setSelected(selected);
  }
  return (
    <>
      <div className="card mb-6">
        <h2 className="font-medium text-main text-2xl pb-6">Categories</h2>
        <div className="card-body">
          <div className="space-y-2">
            <ul className="leading-10">
              {items.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <button
                    onClick={() => handleSelected(index)}
                    className={`text-base font-bold hover:text-lg ${
                      selected === index ? "active-button" : undefined
                    }`}
                  >
                    {item.text}
                  </button>
                  <hr className="number-line" />
                  <span className="number">{item.number}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
