import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Gallery from "../components/Gallery.jsx";
import Partners from "../components/Partners.jsx";
import Product from "../components/Product.jsx";
import Cart from "../components/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Page not found</p>,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
export default router;
