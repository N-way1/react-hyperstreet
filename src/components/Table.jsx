import arrowRight from "../assets/arrow_rigth.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function TableHeader() {
  return (
    <thead className="text-left text-main text-md">
      <tr>
        <th scope="col" className="px-11 font-medium uppercase tracking-wider">
          Product
        </th>
        <th scope="col" className="px-11 font-medium uppercase tracking-wider">
          Size
        </th>
        <th scope="col" className="px-11 font-medium uppercase tracking-wider">
          Quantity
        </th>
        <th scope="col" className="px-11 font-medium uppercase tracking-wider">
          Price
        </th>
        <th
          scope="col"
          className="px-11 font-medium uppercase tracking-wider"
        ></th>
      </tr>
    </thead>
  );
}
function TableBody({ data }) {
  const [quantities, setQuantities] = useState(
    data.map((item) => item.quantity)
  );

  const decreaseQuantity = (index) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
      setQuantities(updatedQuantities);
    }
  };

  const increaseQuantity = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  };
  return (
    <tbody className="bg-white  divide-gray-200">
      {data.map((item, index) => (
        <tr key={index}>
          <td className="px-11 py-7 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {item.name}
                </div>
                <div className="text-sm text-gray-500">{item.brand}</div>
              </div>
            </div>
          </td>
          <td className="px-11 py-7 whitespace-nowrap">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              defaultValue={item.size}
            >
              <option value="41">41</option>
              <option value="40">40</option>
              <option value="39">39</option>
              <option value="38">38</option>
              <option value="37">37</option>
              <option value="36">36</option>
            </select>
          </td>
          <td className="px-11 py-7 whitespace-nowrap">
            <div className="flex items-center">
              <button
                className="button button-minus mr-8"
                type="button"
                onClick={() => decreaseQuantity(index)}
              >
                -
              </button>
              <div className="text-sm text-gray-900">{quantities[index]}</div>
              <button
                className="button button-plus ml-8"
                type="button"
                onClick={() => increaseQuantity(index)}
              >
                +
              </button>
            </div>
          </td>
          <td className="px-11 py-7 whitespace-nowrap">
            <div className="text-sm text-main font-bold">{item.price}</div>
          </td>
          <td className="px-11 py-7 whitespace-nowrap">
            <div className="flex-shrink-0 ">
              <button type="button" className="btn">
                <img className=" rounded-full" src={item.cross} alt="" />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

function SubTotal() {
  return (
    <>
      <div className="col-left">
        <div className="col last-price">
          <div className="row flex flex-row">
            <h5 className="mr-4">Subtotal: </h5>
            <p>$ 470.99</p>
          </div>
          <div className="row flex flex-row">
            <h5 className="mr-4">Shipping: </h5>
            <p>Free</p>
          </div>
          <div className="row total flex flex-row">
            <h5 className="mr-4">Total: </h5>
            <p>$ 470.99</p>
          </div>
        </div>
      </div>
    </>
  );
}

function ContinueShoppingLink() {
  return (
    <>
      <div className="flex items-center">
        <img src={arrowRight} className="mr-2" alt="" />
        <Link
          to="/gallery"
          className="text-main font-bold text-xl hover:text-blue"
        >
          Continue Shopping
        </Link>
      </div>
    </>
  );
}
export default function Table({ data }) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y border-b mt-5">
          <TableHeader />
          <TableBody data={data} />
        </table>
        <SubTotal />
        <ContinueShoppingLink />
      </div>
    </>
  );
}
