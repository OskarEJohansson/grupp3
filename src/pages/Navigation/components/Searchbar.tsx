import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DrinkGlobalState from "../../Drinks/utils/DrinkGlobalState";
import RecipeGlobalState from "../../Food/utils/RecipeGlobalState";

interface SearchItem {
  id: string;
  name: string;
  imageUrl: string;
}

interface SearchBarProps {
  isSearchOpen?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ isSearchOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setSearchResults] = useState<SearchItem[]>([]);
  const [, setSearchResultsFound] = useState(true);
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
        item && item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(filteredResults);
      setSearchResultsFound(filteredResults.length > 0);

      navigate("/search-result", { state: { searchResults: filteredResults } });
    } catch (error) {
      console.error("Error searching:", error);
      setSearchResultsFound(false);
    }
  };

  const searchBarWidth = isSearchOpen ? "100%" : "0";

  return (
    <div className={`search-bar ${isSearchOpen ? "block" : "hidden"} md:flex md:items-center`} style={{ width: searchBarWidth }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-gray-500 flex-grow mr-2"
        style={{ width: searchBarWidth }}
      />
      <button onClick={handleSearch} className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out text-sm focus:outline-none">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
