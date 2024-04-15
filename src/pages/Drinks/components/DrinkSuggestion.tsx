import DrinkGlobalState from "../utils/DrinkGlobalState";
import DrinkAddToCartButton from "./DrinkAddToCartButton";
import { useEffect } from "react";

interface DrinkSuggestionInterface {
  categories: string;
  index: number;
}

const DrinkSuggestion = ({ categories, index }: DrinkSuggestionInterface) => {
  const { fetchDrinkByRecipeCategory, drinkSuggestion } = DrinkGlobalState();

  useEffect(() => {
    switch (categories) {
      case "meat":
        {
          fetchDrinkByRecipeCategory("Red_wine", index);
        }
        break;
      case "fish":
        {
          fetchDrinkByRecipeCategory("Vodka", index);
        }
        break;
      case "veg":
        {
          fetchDrinkByRecipeCategory("rum", index);
        }
        break;
      case "hamburger":
        {
          fetchDrinkByRecipeCategory("Beer", index);
        }
        break;
    }
  }, [categories]);

  return (
    <div>
      <p className="text-gray-600 font-semibold mb-2">Recommended Drink</p>

      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4">
        <div className="flex items-center">
          <div>
            <img
              className="w-16 h-16 mr-4 rounded-full"
              src={drinkSuggestion.strDrinkThumb}
              alt="picture of drink"
            />
            <div>{drinkSuggestion.strDrink}</div>
          </div>
          <div>
            <p className="text-gray-800 font-bold">{}</p>
          </div>
        </div>
        <div>
          <DrinkAddToCartButton article={{ ...drinkSuggestion }} />
        </div>
      </div>
    </div>
  );
};

export default DrinkSuggestion;
