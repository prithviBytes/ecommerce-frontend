import "./styles.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import { DataProvider } from "./Context/DataContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import { FeedbackProvider } from "./Context/FeedbackContext";
import Feedback from "./Components/Feedback";
import { FilterProvider } from "./Context/FilterContext";
import Router from "./Components/Router";
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
                <Router />
              </FilterProvider>
            </FeedbackProvider>
          </WishlistProvider>
        </CartProvider>
      </DataProvider>
    </div>
  );
}
