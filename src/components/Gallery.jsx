import { useState } from "react";

import Header from "./Header";
import ProductCard from "./ProductCard";
import TabButton from "./TabButton";
import Categories from "./Categories";
import Color from "./Color";
import Prices from "./Prices";
import Size from "./Size";
import imgSrc from "../assets/nike_snekkers.png";
import Pagination from "./Pagination";

const product = [];

for (let i = 0; i < 18; i++) {
  product.push({
    imgSrc,
    title: "Nike free Metcon",
    brand: "Nike",
    price: "470.99",
  });
}
const colors = [
  ["#750BC9", "#3983C7", "#FF00D6", "#F66A6A", "#FFD600"],
  ["#FF1D1D", "#FFFFFF", "#00E0FF", "#D9D9D9", "#000000"],
];
const sizes = [
  ["38.5", "39", "39.5", "40", "40.5"],
  ["41", "41.5", "42", "42.5", "43"],
  ["43.5", "44", "44.5", "45", "45.5"],
  [],
];
const price = [
  { label: "Under 100", value: "option1" },
  { label: "100 to 150", value: "option2" },
  { label: "150 to 200", value: "option3" },
  { label: "200 to 250", value: "option4" },
  { label: "250 to 300", value: "option5" },
  { label: "Over 300", value: "option6" },
];
const categories = [
  { text: "Lifestyle", number: 1 },
  { text: "Running", number: 2 },
  { text: "Basketball", number: 3 },
  { text: "Football", number: 4 },
  { text: "Training & Gym", number: 5 },
];

export default function Gallery() {
  const [selected, setSelected] = useState("Recommended");

  function handleSelected(selected) {
    setSelected(selected);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = product.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

  const [selectedColor, setSelectedColor] = useState("#F66A6A");

  function handleColorChange(color) {
    setSelectedColor(color);
  }
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-screen-xl md:px-8">
        <section className="flex justify-between items-center pb-5">
          <h2
            className="mr-auto text-2xl"
            style={{
              color: "#213A51",
            }}
          >
            Men's <span className="font-bold">Shoes & Sneakers</span>
          </h2>
          <div className="flex">
            <span className="font-bold text-main">sort by:</span>
            <menu className="flex ml-4">
              <TabButton
                isSelected={selected === "Recommended"}
                onSelect={() => handleSelected("Recommended")}
              >
                Recommended
              </TabButton>
              <TabButton
                isSelected={selected === "Newest"}
                onSelect={() => handleSelected("Newest")}
              >
                Newest
              </TabButton>
              <TabButton
                isSelected={selected === "Lowest Price"}
                onSelect={() => handleSelected("Lowest Price")}
              >
                Lowest Price
              </TabButton>
              <TabButton
                isSelected={selected === "Highest Price"}
                onSelect={() => handleSelected("Highest Price")}
              >
                Highest Price
              </TabButton>
            </menu>
          </div>
        </section>
        <hr className="py-5" />
        <section className="grid grid-cols-6 gap-20">
          <div className="col-span-2">
            <Categories items={categories} />
            <Color colors={colors} onColorChange={handleColorChange} />
            <Prices price={price} />
            <Size sizes={sizes} />
          </div>
          <div className="col-span-4">
            <menu className="grid grid-cols-4 gap-4">
              {currentItems.map((shoe, index) => (
                <ProductCard color={selectedColor} key={index} {...shoe} />
              ))}
            </menu>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
      </div>
    </>
  );
}
