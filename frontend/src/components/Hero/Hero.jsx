import React from "react";
import "./Hero.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/food-banner.png";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaArrowRight,
  FaMotorcycle,
  FaStar,
  FaStore,
} from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();
const [keyword, setKeyword] = useState("");

const searchHandler = () => {
  if (keyword.trim()) {
    navigate(`/eats/stores/search/${keyword}`);
  } else {
    navigate("/");
  }
};
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <div className="offer-badge">
          🔥 Flat 50% OFF on First Order
        </div>

        <h1>
          Delicious Food,
          <br />
          <span>Delivered Fast</span>
          <br />
          To Your Doorstep
        </h1>

        <p>
          Order from your favourite restaurants with lightning-fast
          delivery, live tracking and exclusive offers.
        </p>

        <div className="hero-search">

          <div className="location-box">
            <FaMapMarkerAlt />
            <span>India</span>
          </div>
<input
  type="text"
  placeholder="Search pizza, burger, biryani..."
  value={keyword}
  onChange={(e) => setKeyword(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  }}
/>

          <button onClick={searchHandler}>
  <FaSearch />
</button>

        </div>

        <div className="hero-buttons">

          <button className="hero-btn">
            Order Now
            <FaArrowRight />
          </button>

          <button className="hero-outline">
            Explore Restaurants
          </button>

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <FaMotorcycle />
            <div>
              <h4>25-30 min</h4>
              <p>Delivery</p>
            </div>
          </div>

          <div className="stat-card">
            <FaStar />
            <div>
              <h4>4.8</h4>
              <p>Rating</p>
            </div>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-circle"></div>

        <img
          src={heroImg}
          alt="Food"
        />

      </div>

    </section>
  );
};

export default Hero;