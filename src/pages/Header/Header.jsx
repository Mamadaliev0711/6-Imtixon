import React from "react";

import { BsCart3 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="">
      <div className="headerColor">
        <div className="header">
          <NavLink to="/" className="icons btn btn-primary fw-bold fs-4 px-3">
            <span>C</span>
          </NavLink>
          <div className="pages">
            <NavLink to="/" className="home text-decoration-none ">
              <span className="inactive">Home</span>
            </NavLink>
            <NavLink to="/about" className="about home text-decoration-none">
              <span className="about inactive">About</span>
            </NavLink>
            <NavLink
              to="/products"
              className="products home text-decoration-none"
            >
              <span className="inactive">Products</span>
            </NavLink>
            <NavLink to="/cart" className="cart home text-decoration-none">
              <span className="inactive">Cart</span>
            </NavLink>
          </div>
          <div className="actions">
            <BsCart3 className="basket mt-1 fs-1" />
            <select class="form-select border border-white shadow p-2 bg-body-tertiary rounded">
              <option value="uz">Uzbek</option>
              <option value="ru">Russian</option>
              <option value="eng">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
