// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import NewArrivals from "./components/Products/NewArrivals";
import ProductDetail from "./pages/ProductDetail";
import WomensCollection from "./components/Products/WomensCollection";
import MensCollection from "./components/Products/MensCollection";
import PatolaSpecial from "./components/Products/PatolaSpecial";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleOrderPopup={handleOrderPopup}
                orderPopup={orderPopup}
                setOrderPopup={setOrderPopup}
              />
            }
          />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/womens" element={<WomensCollection />} />
          <Route path="/mens" element={<MensCollection />} />
          <Route path="/patola" element={<PatolaSpecial />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

