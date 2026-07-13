import React from "react";
import "./OfferButton.css";

const OfferButton = ({ text }) => {
  return (
    <button className="offer-btn">
      {text}
    </button>
  );
};

export default OfferButton;