import React from "react";
import { NavLink } from "react-router-dom";

import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div>
      <div className="color">
        <div className="container">
          <div className="signUp">
            <NavLink to="/login" className="text-decoration-none">
              <span className="signin">Sign in / Guest</span>
            </NavLink>
            <NavLink to="/register" className="text-decoration-none">
              <span className="register">Create Account</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
