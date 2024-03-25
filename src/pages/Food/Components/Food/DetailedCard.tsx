import React, { useState } from "react";
import { CardTypes } from "../../../../types";
import AddToCartButton from "./AddToCartButton";
import "../../../../App.css";
import FoodGlobalState from "../../Utilities/FoodGlobalState";
import QuantityInput from "../../../../components/QuantityInput";

interface DetailedCardProps {
  onClose: () => void;
}

const DetailedCard = ({ onClose }: DetailedCardProps) => {
  const article = FoodGlobalState((state) => state.article as CardTypes);
  const [quantity, setQuantity] = useState(1); 

  const handleOnClick = () => {
    onClose();
  };

  const handleQuantityChange = (newValue: number) => {
    setQuantity(newValue); 
  };

  return (
    <div className="modal-backdrop" onClick={handleOnClick}>
      <div className="detailed-card-container">
        <h1 className="detailed-card-title">DETAILED CARD</h1>
        <div className="detailed-card-info">
          <img src={article.imageUrl} alt="Dish" className="card-image" /> <br />
          Title: {article.title} <br />
          Category: {article.categories} <br />
          Description: {article.description} <br />
          Quantity: 
          <QuantityInput value={quantity} onChange={handleQuantityChange} /> {/* Include QuantityInput */}
        </div>
        <AddToCartButton article={{...article, quantity}} /> {/* Pass quantity when adding to cart */}
        <button className="back-button">Back</button>
      </div>
    </div>
  );
};

export default DetailedCard;
