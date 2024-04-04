import TopHeader from "../TopHeader/TopHeader";
import Header from "../Header/Header";
import React, { Routes, Route } from "react";
import image1 from "../../assets/hero-1.webp";
import image2 from "../../assets/hero-2.webp";
import image3 from "../../assets/hero-3.webp";
import image4 from "../../assets/hero-4.webp";
import homeimg1 from "../../assets/home--1.webp";
import homeimg2 from "../../assets/home--2.jpeg";
import homeimg3 from "../../assets/home--3.jpeg";

import "./home.css";

function Home() {
  return (
    <>
      <TopHeader></TopHeader>

      <Header></Header>
      <div className="container">
        <div className="homepage">
          <div className="row">
            <div className="hompage--1 col-6">
              <h1 className="">We are changing the way people shop</h1>
              <span className="col__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore repellat explicabo enim soluta temporibus asperiores aut
                obcaecati perferendis porro nobis.
              </span>
              <br />
              <button className="btn btn-primary mt-5">OUR PRODUCTS</button>
            </div>
            <div className="col-6">
              <div className="slideShow">
                <div className="carouselItem">
                  <img className="imageWrapper--1" src={image1} alt="" />
                </div>
                <div className="carouselItem">
                  <img className="imageWrapper--1" src={image2} alt="" />
                </div>
                <div className="carouselItem">
                  <img className="imageWrapper--1" src={image3} alt="" />
                </div>
                <div className="carouselItem">
                  <img className="imageWrapper--1" src={image4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage">
          <h1>Featured Products</h1>
          <hr />
          <div className="home--card d-flex gap-5">
            <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
              <img className="imageWrapper" src={homeimg1} alt="" />
              <h5>Avant-Garde Lamp</h5>
              <span className="product--value">$179.99</span>
            </div>

            <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
              <img className="imageWrapper" src={homeimg2} alt="" />
              <h5>Coffee Table</h5>
              <span className="product--value">$179.99</span>
            </div>
            <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
              <img className="imageWrapper" src={homeimg3} alt="" />
              <h5>Comfy Bed</h5>
              <span className="product--value">$129.99</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
