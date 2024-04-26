import React, { useState } from "react";
import shoes1 from "../assets/shoes1.png";
import shoes2 from "../assets/shoes2.png";
import shoes3 from "../assets/shoes3.png";
import shoes4 from "../assets/shoes4.png";
import shoes5 from "../assets/shoes5.png";
import shoes6 from "../assets/shoes6.jpg";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const images = [shoes1, shoes2, shoes3, shoes4, shoes5, shoes6];

export default function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };
  return (
    <section className="container mx-auto max-w-screen-xl md:p-8 ">
      <div className="card py-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 justify-items-start items-center">
          {" "}
          {/* Added items-center class to center the content vertically */}
          <div className="md:col-span-1">
            <div>
              <p
                className="mb-4 uppercase font-extrabold text-5xl md:text-5xl lg:text-3xl xl:text-5xl 2xl:text-7xl"
                style={{
                  color: "#213A51",
                  lineHeight: "75px",
                }}
              >
                Introduce the new runners
              </p>

              <p
                className="card-text secondary font-normal text-2xl md:text-3xl md:font-light lg:text-2xl py-8"
                style={{
                  color: "#213A51",
                  fontsize: "20px",
                  fontFamily: "Segoe UI",
                }}
              >
                When it comes to running, nothing is more important than finding
                the right running shoe to avoid injury and up your fitness.
              </p>
              <Link to="/gallery">
                <button
                  type="button"
                  className="bt text-white text-2xl md:text-xl lg:text-xl py-4 px-4 rounded-xl hover:bg-gray-700"
                  style={{
                    backgroundColor: "#213A51",
                  }}
                >
                  Learn more
                </button>
              </Link>
            </div>
          </div>
          <div className="md:col-span-1">
            {" "}
            {/* Reduced the number of columns for the carousel */}
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <Carousel name={images[currentIndex]} />
              </div>
              <div className="buttons">
                <div className="flex justify-end items-end text-white">
                  <button
                    type="button"
                    className="btn btn-arrow mr-7 p-3 rounded-xl transition duration-300 ease-in-out hover:bg-gray-700" // Added transition effect
                    onClick={prevSlide}
                    style={{
                      backgroundColor: "#213A51",
                    }}
                  >
                    <i className="fas fa-chevron-left text-xl"></i>{" "}
                    {/* Increase icon size */}
                  </button>
                  <button
                    type="button"
                    className="btn btn-arrow p-3 rounded-xl transition duration-300 ease-in-out hover:bg-gray-700" // Added transition effect
                    onClick={nextSlide}
                    style={{
                      backgroundColor: "#213A51",
                    }}
                  >
                    <i className="fas fa-chevron-right text-xl"></i>{" "}
                    {/* Increase icon size */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
