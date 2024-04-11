import { useState } from "react";
import { DrinkDetails, RecipeTypes } from "../../../types";
import { useNavigate } from "react-router-dom";
import SearchbarGlobalState from "./utils/SearchbarGlobalState";
import  RecipeAddToCartButton  from "../../Recipe/components/RecipeAddToCartButton";
import DrinkAddToCartButton  from "../../Drinks/components/DrinkAddToCartButton";

const SearchResultsPage = () => {
  const { drinks, filteredRecipes } = SearchbarGlobalState();
  const navigate = useNavigate();
  const [isRecipeSelected, setIsRecipeSelected] = useState(true);

  const handleTabChange = (value) => {
    setIsRecipeSelected(value);
  };

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handleTabChange(true)}
          className={`px-4 py-2 rounded-md focus:outline-none ${isRecipeSelected ? 'bg-yellow-500 text-white' : 'bg-yellow-200 text-black'}`}
        >
          Recipes
        </button>
        <button
          onClick={() => handleTabChange(false)}
          className={`px-4 py-2 rounded-md focus:outline-none ${isRecipeSelected ? 'bg-yellow-200 text-black' : 'bg-yellow-500 text-white'}`}
        >
          Drinks
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isRecipeSelected ? (
          filteredRecipes.length === 0 ? (
            <div className="text-center">
              <h1>No search results found for recipes</h1>
            </div>
          ) : (
            filteredRecipes.map((recipe: RecipeTypes, index: number) => (
              <div key={index} className="border border-gray-300 rounded p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <img
                  src={recipe.imageUrl}
                  alt="Recipe Picture"
                  className="w-40 h-40 object-cover"
                />
                <div className="text-lg mb-2">Categories: {recipe.categories}</div>
                <div className="mt-2">Price: {recipe.price} :-</div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex space-x-4">
                    <RecipeAddToCartButton article={recipe} />
                    <button onClick={() => navigate("/category-page/comments")}>Comments</button>
                  </div>
                </div>
              </div>
            ))
          )
        ) : (
          drinks === null || drinks.length === 0 ? (
            <div className="text-center">
              <h1>No search results found for drinks</h1>
            </div>
          ) : (
            drinks.map((drink: DrinkDetails, index: number) => (
              <div key={index} className="border border-gray-300 rounded p-4">
                <h2 className="text-xl font-semibold mb-2">{drink.strDrink}</h2>
                <img
                  src={drink.strDrinkThumb}
                  alt="Drink Picture"
                  className="cursor-pointer rounded-md mb-2"
                  style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }}
                />
                <div className="mt-4 flex justify-end">
                  <DrinkAddToCartButton article={drink} />
                </div>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
