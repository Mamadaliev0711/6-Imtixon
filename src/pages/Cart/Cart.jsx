import React from "react";
import Header from "../Header/Header";
import TopHeader from "../TopHeader/TopHeader";
import image1 from "../../assets/img-carts.jpeg";

import "./cart.css";

const Cart = () => {
  return (
    <div>
      <TopHeader></TopHeader>

      <Header></Header>

      <div className="container">
        <div className="mt-5">
          <div className="carts-text">
            <h1>Shopping Cart</h1>
          </div>
          <hr />
          <div className="row d-flex">
            <div className="col-2 cart--img">
              <img src={image1} alt="" />
            </div>
            <div className="col-4 sm:ml-16 sm:w-48">
              <h3 className="capitalize font-medium">Coffee table</h3>
              <h4 className="mt-2 capitalize text-sm text-neutral-content">
                Modenza
              </h4>
              <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
                Color :{" "}
              </p>
            </div>
            <div className="col-4 carts--amount">
              <h4>Amount</h4>
              <select className="carts--number">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              <br />
              <br />
              <span className="carts--texts text-primary">remove</span>
            </div>
            <div className=" carts--money">
              <span>$179.99</span>
            </div>
            <div className="bg-primary bg-opacity-10 carts--card">
              <div className="carts--texts--2 d-flex">
                <span>Subtotal </span>
                <span className="w-25">$179.99</span>
              </div>
              <hr />
              <div className="carts--texts--2 d-flex">
                <span>Shipping </span>
                <span>$5.00</span>
              </div>
              <hr />
              <div className="carts--texts--2 d-flex ">
                <span>Tax </span>
                <span>$18.00</span>
              </div>
              <hr />
              <div className="carts--total d-flex mt-4">
                <span>Order Total</span>
                <span>$202.99</span>
              </div>
            </div>
            <div className="carts--button ">
              <button className="btn btn-primary ">PLEASE LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
