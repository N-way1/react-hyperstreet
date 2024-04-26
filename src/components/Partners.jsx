import Header from "./Header";
import Partner from "./Partner";
import Nike from "../assets/nike.png";
import Reebok from "../assets/reebok.png";
import Adidas from "../assets/adidas.png";
import NewBalance from "../assets/newbalance.png";
import Skechers from "../assets/skechers.png";
import Altra from "../assets/altra.png";

export default function Partners() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-screen-xl md:p-8">
        <div className="flex flex-col items-center justify-center">
          <section>
            <h1 className="font-semibold text-3xl text-main uppercase text-center pb-12 ">
               our success partners
            </h1>
            <div className="grid grid-cols-3 gap-20">
              <Partner>{Reebok}</Partner>
              <Partner>{Nike}</Partner>
              <Partner>{Adidas}</Partner>
              <Partner>{NewBalance}</Partner>
              <Partner>{Skechers}</Partner>
              <Partner>{Altra}</Partner>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
