import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import LandingPage from "./Pages/LandingPage";
import ProductsDisplay from "./Pages/ProductsDisplay";
import WishlistPage from "./Pages/WishlistPage";
import CartPage from "./Pages/CartPage";
import { DataProvider } from "./Context/DataContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import { FeedbackProvider } from "./Context/FeedbackContext";
import Feedback from "./Components/Feedback";
import { FilterProvider } from "./Context/FilterContext";

export default function App() {
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <Banner />
        <CartProvider>
          <WishlistProvider>
            <FeedbackProvider>
              <FilterProvider>
                <Feedback />
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route
                    path="/products/:category"
                    element={<ProductsDisplay />}
                  />
                  <Route path="wishlist" element={<WishlistPage />} />
                  <Route path="cart" element={<CartPage />} />
                </Routes>
              </FilterProvider>
            </FeedbackProvider>
          </WishlistProvider>
        </CartProvider>
      </DataProvider>
    </div>
  );
}
