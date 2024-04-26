import bag from "../assets/bag.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [selected, setSelected] = useState(null);

  function handleSelected(selected) {
    setSelected(selected);
  }

  return (
    <>
      <section className="container mx-auto max-w-screen-xl pb-16">
        <div
          className="flex items-center justify-between md:p-3 lg:p-8"
          style={{}}
        >
          {/* Left Section: Logo */}
          <div className="">
            <Link to="/" className="text-xl font-black text-gray-800">
              Hypestreet
            </Link>
          </div>

          {/* Middle Section: Navigation */}
          <nav className="hidden lg:flex flex-grow items-center justify-center">
            <ul className="flex justify-center space-x-24 font-extrabold">
              {" "}
              {/* Adjusted the spacing between elements */}
              <li>
                <Link
                  to="/"
                  className={`text-gray-600 hover:text-gray-800 ${
                    selected === "Home" ? "text-black" : undefined
                  }`}
                  onClick={() => handleSelected("Home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className={`text-gray-600 hover:text-gray-800 ${
                    selected === "Gallery" ? "text-black" : undefined
                  }`}
                  onClick={() => handleSelected("Gallery")}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`text-gray-600 hover:text-gray-800 ${
                    selected === "Contact" ? "text-black" : undefined
                  }`}
                  onClick={() => handleSelected("Contact")}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className={`text-gray-600 hover:text-gray-800 ${
                    selected === "Partners" ? "text-black" : undefined
                  }`}
                  onClick={() => handleSelected("Partners")}
                >
                  Partners
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Section: Cart Icon */}
          <div>
            <Link to="/cart">
              <img src={bag} alt="Shopping Bag" className="w-6 h-7" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
