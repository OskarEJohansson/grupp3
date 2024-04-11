
import AddToCartButton from "./RecipeAddToCartButton";
import RecipeGlobalState from "../utils/RecipeGlobalState";
import { RecipeTypes } from "../../../types";
import DrinkSuggestion from "../../Drinks/components/DrinkSuggestion";

const RecipeDetailedCard = ({ onClose }: { onClose: () => void }) => {
  const article = RecipeGlobalState((state) => state.article as RecipeTypes);


  const ingredients = article.ingredients.filter(Boolean);
  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={index} className="text-sm">{ingredient.name}</li>
  ));

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-md overflow-y-auto" style={{ width: "80%", maxHeight: "80%" }}>
        <h1 className="text-3xl font-bold mb-4 text-black">{article.title}</h1>
        <img
          src={article.imageUrl}
          alt="Picture of recipe"
          className="w-full md:w-auto h-auto mb-6 md:mb-0 rounded-lg"
        />
        <div className="text-lg mb-4 text-gray-800">
          <p>This is a <span className="font-semibold">{article.categories}</span> recipe!</p>
          <p>It is {article.description}.</p>
        </div>
        <div className="text-lg mb-4 text-gray-800">
          <p>Ingredients:</p>
          <ul className="list-disc pl-4">
            {ingredientsList}
          </ul>
        </div>
        <div className="text-lg mb-4 text-gray-800">
          <p>Quantity:</p>
          <QuantityInput value={quantity} onChange={handleQuantityChange} />
        </div>
      </div>
      <div className="fixed bottom-4 left-0 w-full flex justify-center">
        <button
          className="ml-4 px-4 py-2 text-white bg-gray-300 rounded hover:bg-gray-600"
          onClick={onClose}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default RecipeDetailedCard;
