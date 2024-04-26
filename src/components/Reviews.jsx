import React from "react";

export default function Reviews() {
  return (
    <>
      <div className="uppercase mb-2">
        <menu>
          <li className="flex justify-between items-center">
            <h5 className="text-main font-medium text-2xl mr-5">reviews</h5>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    id={`star${index + 1}`}
                    name="rating"
                    value={index + 1}
                  />
                  <label htmlFor={`star${index + 1}`}></label>
                </React.Fragment>
              ))}
            </div>
          </li>
        </menu>
      </div>
    </>
  );
}
