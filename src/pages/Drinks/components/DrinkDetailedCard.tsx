
import AddToCartButton from "./DrinkAddToCartButton";
import DrinkGlobalState from "../utils/DrinkGlobalState";
import { DrinkDetails } from "../../../types";

const DrinkDetailedCard = ({ onClose }: { onClose: () => void }) => {
  const drink = DrinkGlobalState((state) => state.drink as DrinkDetails);

  const ingredients = Object.entries(drink)
    .filter(([key, value]) => key.startsWith("strIngredient") && value)
    .map(([key, value]) => value);

  const ingredientsList = ingredients.map((ingredient, index) => (
    <li key={index} className="text-sm">{ingredient}</li>
  ));
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-md overflow-y-auto" style={{ width: "80%", maxHeight: "80%" }}>
        <h1 className="text-3xl font-semibold mb-4 text-black">{drink.strDrink}</h1>
        <img
          src={drink.strDrinkThumb}
          alt="Picture of drink"
          className="w-full md:w-auto h-auto mb-6 md:mb-0 rounded-lg"
        />
        <div className="text-lg mb-2 mt-2 text-gray-800">This is a {drink.strAlcoholic} drink!</div>
        <div className="text-lg mb-2 text-gray-800">It is a {drink.strCategory?.toLowerCase()}, to be served in {drink.strGlass?.toLocaleLowerCase()}.</div>
        <div className="text-lg mb-2 text-gray-800" style={{ overflowY: "auto" }}>
          <div className="text-lg mb-4 text-gray-800">
          <p>Ingredients:</p>
          <ul className="list-disc pl-4">
            {ingredientsList}
          </ul>
          </div>
        </div>
        <div className="fixed bottom-4 left-0 w-full flex justify-center">
        <AddToCartButton article={{ ...drink }} />
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
