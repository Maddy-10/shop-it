import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Navbar } from "./Components/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/ShopContext";
import { Shipping } from "./pages/shipping/Shipping";
import { Orderplaced } from "./pages/shipping/Orderplaced";

function App() {
  return (
    <>
      <div className="App">
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/Shipping" element={<Shipping />} />
              <Route path="/Orderplaced" element={<Orderplaced />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
