import { useState } from "react";
import AddToCartButton from "./DrinkAddToCartButton";
import QuantityInput from "../../../components/QuantityInput";
import DrinkGlobalState from "../utils/DrinkGlobalState";
import { DrinkDetails } from "../../../types";

const DrinkDetailedCard = ({ onClose }: { onClose: () => void }) => {
  const drink = DrinkGlobalState((state) => state.drink as DrinkDetails);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newValue: number) => {
    setQuantity(newValue);
  };

  const ingredients = [drink.strIngredient1, drink.strIngredient2];
  const ingredientsList = ingredients
    .filter((ingredient) => ingredient)
    .map((ingredient, index) => <li key={index}>{ingredient}</li>);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-md overflow-y-auto" style={{ width: "80%" }}>
        <h1 className="text-2xl font-semibold mb-4 text-indigo-600">{drink.strDrink}</h1>
        <img
          src={drink.strDrinkThumb}
          alt="Picture of drink"
          className="w-full md:w-auto h-auto mb-4 md:mb-0 rounded-lg"
        />
        <div className="text-lg mb-2 text-gray-800">This is a {drink.strAlcoholic} drink!</div>
        <div className="text-lg mb-2 text-gray-800">It is a {drink.strCategory?.toLowerCase()}, to be served in {drink.strGlass?.toLocaleLowerCase()}. Containing {drink.strIngredient1}, {drink.strIngredient2}, {drink.strIngredient3}, {drink.strIngredient4}, {drink.strIngredient5}.</div>
        <div className="text-lg mb-2 text-gray-800">
          Ingredients:
          <ul className="grid grid-cols-2 gap-4">
            {ingredientsList}
          </ul>
        </div>
        <div className="text-lg mb-2 text-gray-800">
          Quantity:
          <QuantityInput value={quantity} onChange={handleQuantityChange} />
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
