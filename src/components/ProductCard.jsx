import { Link } from "react-router-dom";

export default function ProductCard({ imgSrc, title, brand, price, color }) {
  return (
    <>
      <Link to={`/product`} className="shoe mr-4">
        <div className="rounded-b-2xl mb-12 shadow-lg">
          <img
            src={imgSrc}
            className="rounded-t-2xl"
            style={{ backgroundColor: color }}
            alt="Shoe"
          />
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h5 className="card-title">{title}</h5>
              <div className="icon-placeholder drop-shadow">
                {/* Add your icon class here */}
                <i className="fas fa-shopping-cart"></i>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs mb-0">{brand}</p>
              <span className="price font-bold text-xs">${price}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
