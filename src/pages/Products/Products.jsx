// Products.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import TopHeader from "../TopHeader/TopHeader";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // Dark mode holati

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Dark mode-ni yoqish va o'chirish funksiyasi
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <TopHeader />
      <button
        className="app--buttons btn toggleDarkMode"
        onClick={() => toggleDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      <Header />

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <Link to={`/product/${product.id}`} className="">
                <div className="cards shadow p-3 mb-5 bg-body-tertiary rounded">
                  <img
                    src={product.attributes.image}
                    className="card-img-top"
                    alt={product.attributes.title}
                  />
                  <h5 className="card-title">{product.attributes.title}</h5>
                  <p className="card-text">
                    Price: ${product.attributes.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
