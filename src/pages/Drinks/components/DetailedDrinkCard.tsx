import { useState } from "react";
import { BeverageDetails } from "../../../types";
import AddToCartButton from "../../Drinks/components/DrinkAddToCartButton";
import DrinkGlobalState from "../utils/DrinkGlobalState";
import QuantityInput from "../../../components/QuantityInput";

const DrinkDetailedCard = ({ onClose }: { onClose: () => void }) => {
  const drink = DrinkGlobalState((state) => state.drink as BeverageDetails);
  console.log(drink);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newValue: number) => {
    setQuantity(newValue);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-md overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-4">{drink.strDrink}</h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <img
            src={drink.strDrinkThumb}
            alt="Picture of drink"
            className="w-full md:w-auto h-auto mb-4 md:mb-0"
          />
          <div>
            <div className="mb-2">Beverage: {drink.strAlcoholic}</div>
            <div className="mb-2">Category: {drink.strCategory}</div>
            <div className="mb-2">Served in: {drink.strGlass}</div>
            <div className="mb-2">Ingredients: {drink.strIngredient1}</div>
            <div className="mb-2">{drink.strIngredient2}</div>
            <div className="mb-2">
              Quantity:{" "}
              <QuantityInput value={quantity} onChange={handleQuantityChange} />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <AddToCartButton article={{ ...drink, quantity }} />
          <button
            className="ml-4 px-4 py-2 text-white bg-gray-300 rounded hover:bg-gray-600"
            onClick={onClose}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetailedCard;
