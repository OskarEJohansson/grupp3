import { useState } from "react";
import { BeverageDetails } from "../../../types";
import AddToCartButton from "../../Food/Components/Food/AddToCartButton";
import DetailedCard from "../../Food/Components/Food/DetailedCard";
import BeverageGlobalState from "../Utilities/BeveragesGlobalState";
import QuantityInput from "../../../components/QuantityInput";

const DetailedBeverageCard = ({ onClose }: { onClose: () => void }) => {
const beverage = BeverageGlobalState((state) => state.beverage as BeverageDetails);

  

  const [quantity, setQuantity] = useState(1); 

  const handleQuantityChange = (newValue: number) => {
    setQuantity(newValue); 
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
       <div className="detailed-card-container">
       <h1 className="detailed-card-title">{beverage.strDrink}</h1>
       <div className="detailed-card-info">
          <img src={beverage.strDrinkThumb} alt="Picture of drink" width={300} />
          <div> Beverage: {beverage.strAlcoholic}</div>
          <div>Category: {beverage.strCategory}</div>
            Served in: {beverage.strGlass}
            <br />
            Ingredients: {beverage.strIngredient1}
            <br />
            {beverage.strIngredient2}
            Quantity: 
        <QuantityInput value={quantity} onChange={handleQuantityChange} /> 
    </div>
    <AddToCartButton article={{...beverage, quantity}} /> 
      <button className="back-button">Back</button>
      </div>
  </div>

  );
};

export default DetailedBeverageCard;

