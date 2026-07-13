     import React from "react";
import "./Offers.css";

import pizza from "../../assets/pizza.png";
import burger from "../../assets/burger.png";
import delivery from "../../assets/delivery.png";


import dominos from "../../assets/dominos.png";
import burgerKing from "../../assets/burgerking.png";
import kfc from "../../assets/kfc.png";

const Offers = () => {
  return (
    <div className="offers-page">

      {/* Header */}

      <div className="offers-header">

        <h1>🔥 Exclusive Offers</h1>

        <p>
          Save more on every order with exciting deals.
        </p>

      </div>

      {/* Pizza Offer */}

      <div className="offer-card orange">

        <div className="offer-image">

          <img
            src={pizza}
            alt="Pizza"
          />

        </div>

        <div className="offer-content">

          <span className="offer-tag">
            LIMITED OFFER
          </span>

          <h2>Flat 50% OFF</h2>

          <p>
            On your first order above ₹299
          </p>

          <h3>Use Code : FIRST50</h3>

          <button>
            Claim Offer
          </button>

        </div>

      </div>

      {/* Burger Offer */}

      <div className="offer-card red">

        <div className="offer-image">

          <img
            src={burger}
            alt="Burger"
          />

        </div>

        <div className="offer-content">

          <span className="offer-tag">
            TODAY ONLY
          </span>

          <h2>Buy 1 Get 1 Free</h2>

          <p>
            On selected burgers
          </p>

          <h3>Use Code : BOGO</h3>

          <button>
            Order Now
          </button>

        </div>

      </div>

      {/* Delivery Offer */}

      <div className="offer-card green">

        <div className="offer-image">

          <img
            src={delivery}
            alt="Delivery"
          />

        </div>

        <div className="offer-content">

          <span className="offer-tag">
            FREE DELIVERY
          </span>

          <h2>₹0 Delivery Charges</h2>

          <p>
            Above ₹199 order value
          </p>

          <h3>Use Code : FREEDEL</h3>

          <button>
            Claim
          </button>

        </div>

      </div>
     {/* Popular Restaurant Deals */}

      <div className="restaurant-offers">

        <h2>Popular Restaurant Deals</h2>

        <div className="restaurant-list">

          <div className="restaurant-item">

            <div className="restaurant-info">

              <img src={dominos} alt="Domino's" />

              <div>

                <h4>Domino's Pizza</h4>

                <p>Pizza • Fast Food</p>

              </div>

            </div>

            <span className="offer-badge">
              40% OFF
            </span>

          </div>

          <div className="restaurant-item">

            <div className="restaurant-info">
             <img src={burgerKing} alt="Burger King" />

              <div>

                <h4>Burger King</h4>

                <p>Burger • American</p>

              </div>

            </div>

            <span className="offer-badge">
              30% OFF
            </span>

          </div>

          <div className="restaurant-item">

            <div className="restaurant-info">

              <img src={kfc} alt="KFC" />

              <div>

                <h4>KFC</h4>

                <p>Chicken • Fast Food</p>

              </div>

            </div>

            <span className="offer-badge">
              FREE DELIVERY
            </span>


          </div>

        </div>

      </div>



    </div>
  );
};

export default Offers;