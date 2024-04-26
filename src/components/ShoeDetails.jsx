import { useState } from "react";
import Color from "./Color";
import Price from "./Price";
import Reviews from "./Reviews";
import Sizes from "./Sizes";

const colors = [["#750BC9", "#3983C7", "#FF00D6", "#F66A6A", "#FFD600"]];
const sizes = ["37", "38", "39", "40", "41"];

export default function ShoeDetails() {
  const [selectedColor, setSelectedColor] = useState("#F66A6A");

  function handleColorChange(color) {
    setSelectedColor(color);
  }
  return (
    <>
      <section className="flex items-center justify-center">
        <menu className="uppercase">
          <Sizes sizes={sizes} />
          <Reviews />
          <Price />
          <Color colors={colors} onColorChange={handleColorChange} />
        </menu>
      </section>
    </>
  );
}
