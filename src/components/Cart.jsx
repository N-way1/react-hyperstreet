import Header from "./Header";
import PaymentCard from "./PaymentCard";
import Table from "./Table";
import nike2 from "../assets/NIK21699_1000_3 2.png";
import cross from "../assets/cross.png";

const cartItems = [];
for (let i = 0; i < 4; i++) {
  cartItems.push({
    image: nike2,
    name: "Nael D Roger",
    brand: "Nike",
    size: "41",
    quantity: 1,
    price: "$ 470.99",
    cross: cross,
  });
}

export default function Cart() {
  return (
    <>
      <Header />
      <section className="container mx-auto max-w-screen-xl md:p-8">
        <h1 className="text-main font-bold text-2xl">Shopping Cart.</h1>
        <div className="flex justify-center items-center">
          <Table data={cartItems} className="flex-2" />
          <PaymentCard className="flex" />
        </div>
      </section>
    </>
  );
}
