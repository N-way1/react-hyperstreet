import Header from "./Header";
import ImageCard from "./ImageCard";
import Shoe from "./Shoe";
import ShoeDetails from "./ShoeDetails";

export default function Product() {
  return (
    <>
      <Header />
      <section className="container mx-auto max-w-screen-xl md:p-8">
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <Shoe />
          </div>
          <div className="flex-2 mx-3">
            <ImageCard />
          </div>
          <div className="flex-1">
            <ShoeDetails />
          </div>
        </div>
      </section>
    </>
  );
}
