import { useState } from "react";
import { CardTypes } from "../../../types";
import AddToCartButton from "./RecipeAddToCartButton";
import "../../../App.css";
import FoodGlobalState from "../utils/RecipeGlobalState";
import QuantityInput from "../../../components/QuantityInput";

const RecipeDetailedCard = ({ onClose }: { onClose: () => void }) => {
  const article = FoodGlobalState((state) => state.article as CardTypes);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newValue: number) => {
    setQuantity(newValue);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="detailed-card-container">
        <h1 className="detailed-card-title">DETAILED CARD</h1>
        <div className="detailed-card-info">
          <img src={article.imageUrl} alt="Dish" className="card-image" />{" "}
          <br />
          Title: {article.title} <br />
          Category: {article.categories} <br />
          Description: {article.description} <br />
          Quantity:
          <QuantityInput value={quantity} onChange={handleQuantityChange} />
        </div>
        <AddToCartButton article={{ ...article, quantity }} />
        <button className="back-button">Back</button>
      </div>
    </div>
  );
};

export default RecipeDetailedCard;
