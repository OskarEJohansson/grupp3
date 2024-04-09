import { useState } from "react";
import { BeverageDetails } from "../../../types";
import AddToCartButton from "../../Recipe/components/RecipeAddToCartButton";
import DrinkGlobalState from "../utils/DrinkGlobalState";
import QuantityInput from "../../../components/QuantityInput";

const DetailedDrinkCard = ({ onClose }: { onClose: () => void }) => {
  const drink = DrinkGlobalState((state) => state.drink as BeverageDetails);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newValue: number) => {
    setQuantity(newValue);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="detailed-card-container">
        <h1 className="detailed-card-title">{drink.strDrink}</h1>
        <div className="detailed-card-info">
          <img src={drink.strDrinkThumb} alt="Picture of drink" width={300} />
          <div> Beverage: {drink.strAlcoholic}</div>
          <div>Category: {drink.strCategory}</div>
          Served in: {drink.strGlass}
          <br />
          Ingredients: {drink.strIngredient1}
          <br />
          {drink.strIngredient2}
          Quantity:
          <QuantityInput value={quantity} onChange={handleQuantityChange} />
        </div>
        <AddToCartButton article={{ ...drink, quantity }} />
        <button className="back-button">Back</button>
      </div>
    </div>
  );
};

export default DetailedDrinkCard;
