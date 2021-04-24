import { Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import ProductsDisplay from "../Pages/ProductsDisplay";
import WishlistPage from "../Pages/WishlistPage";
import CartPage from "../Pages/CartPage";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products/:category" element={<ProductsDisplay />} />
      <Route path="wishlist" element={<WishlistPage />} />
      <Route path="cart" element={<CartPage />} />
    </Routes>
  );
}
