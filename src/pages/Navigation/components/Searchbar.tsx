import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DrinkGlobalState from "../../Drinks/utils/DrinkGlobalState";
import RecipeGlobalState from "../../Food/utils/RecipeGlobalState";

interface SearchItem {
  id: string;
  name: string;
  imageUrl: string;
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [searchResultsFound, setSearchResultsFound] = useState(true);
  const navigate = useNavigate();
  const { fetchRecipe, categoryData, URL } = RecipeGlobalState();
  const {
    alcoholicDrinkList,
    nonAlcoholicDrinkList,
    fetchAlcoholicDrink,
    fetchNonAlcoholicDrink,
  } = DrinkGlobalState();

  useEffect(() => {
    fetchRecipe(URL);
    fetchAlcoholicDrink();
    fetchNonAlcoholicDrink();
  }, [URL, fetchAlcoholicDrink, fetchRecipe, fetchNonAlcoholicDrink]);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    try {
      const mergedResults: SearchItem[] = [];

      mergedResults.push(
        ...categoryData.map((food) => ({
          id: food._id,
          name: food.title,
          imageUrl: food.imageUrl,
        }))
      );

      mergedResults.push(
        ...alcoholicDrinkList.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          imageUrl: drink.strDrinkThumb,
        }))
      );

      mergedResults.push(
        ...nonAlcoholicDrinkList.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          imageUrl: drink.strDrinkThumb,
        }))
      );

      const filteredResults = mergedResults.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(filteredResults);
      setSearchResultsFound(filteredResults.length > 0);
    } catch (error) {
      console.error("Error searching:", error);
      setSearchResultsFound(false);
    }
    navigate("/search-result", { state: { searchResults } });

    useEffect(() => {
      setSearchQuery("");
    }, [navigate]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
