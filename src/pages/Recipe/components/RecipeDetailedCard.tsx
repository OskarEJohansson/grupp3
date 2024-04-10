import { useState } from "react";
import { RecipeTypes } from "../../../types";
import AddToCartButton from "./RecipeAddToCartButton";
import RecipeGlobalState from "../utils/RecipeGlobalState";
import QuantityInput from "../../../components/QuantityInput";

const RecipeDetailedCard = ({ onClose }: { onClose: () => void }) => {
  const article = RecipeGlobalState((state) => state.article as RecipeTypes);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newValue: number) => {
    setQuantity(newValue);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-lg overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">DETAILED CARD</h1>
        <div className="flex flex-col items-center">
          <img
            src={article.imageUrl}
            alt="Dish"
            className="w-64 h-64 object-cover mb-4"
          />
          <div className="text-center mb-4">
            <p className="text-sm mb-2">{article.description}</p>
            <p className="text-sm mb-2">Price: {article.price} :-</p>
            <p className="text-sm mb-2">Ingredients:</p>
            <ul className="list-disc pl-4 grid grid-cols-2 gap-2">
              {article.ingredients.map((ingredient, index) => (
                <li className="text-sm" key={index}>
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <p className="text-sm mb-2">Quantity:</p>
            <QuantityInput value={quantity} onChange={handleQuantityChange} />
          </div>
        </div>
        <div className="flex justify-center">
          <AddToCartButton article={{ ...article, quantity }} />
          <button
            className="ml-2 bg-yellow-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out text-sm"
            onClick={onClose}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailedCard;
