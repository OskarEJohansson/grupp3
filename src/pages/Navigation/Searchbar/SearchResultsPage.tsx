import SearchbarGlobalState from "./utils/SearchbarGlobalState";
import { DrinkDetails, RecipeTypes } from "../../../types";
import DrinkAddToCartButton from "../../Drinks/components/DrinkAddToCartButton";
import RecipeAddToCartButton from "../../Recipe/components/RecipeAddToCartButton";

const SearchResultsPage = () => {
  const { drinks, filteredRecipes } = SearchbarGlobalState();

  return (
    <div>
      <div>
        {drinks === null || drinks.length === 0 ? (
          <div>
            <h1>No search results found for drinks</h1>
          </div>
        ) : (
          drinks.map((drink: DrinkDetails, index: number) => (
            <div key={index}>
              {drink.strDrink}
              <img src={drink.strDrinkThumb} alt="Drink picture" />
              <div>
                <DrinkAddToCartButton article={drink} />
              </div>
            </div>
          ))
        )}
        <div>
          {filteredRecipes.length === 0 ? (
            <div>
              <h1>No search results found for recipes</h1>
            </div>
          ) : (
            filteredRecipes.map((recipe: RecipeTypes, index: number) => (
              <div key={index}>
                {recipe.title}
                <img src={recipe.imageUrl} alt="Picture of Recipe" />
                <div>
                  <RecipeAddToCartButton article={recipe} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
