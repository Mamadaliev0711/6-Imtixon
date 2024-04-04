import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import "../src/app.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  }, [darkMode]);

  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    document.documentElement.style.backgroundColor = "#333333";
    document.body.style.backgroundColor = "#272935";
    document.documentElement.style.color = "#ffffff";
  };

  const enableLightMode = () => {
    document.body.classList.remove("dark-mode");
    document.documentElement.style.backgroundColor = "#ffffff";
    document.body.style.backgroundColor = "#ffffff";
    document.documentElement.style.color = "#000000";
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="App">
        <button
          className="app--button btn toggleDarkMode"
          onClick={toggleDarkMode}
        >
          {darkMode ? "☀️" : "🌙 "}
        </button>
      </div>
      <Routes>
        <Route path="/cards" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
