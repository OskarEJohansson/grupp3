import SearchbarGlobalState from "../utils/SearchbarGlobalState";
import { useNavigate } from "react-router-dom";

const SearchbarButton = () => {
  const { searchInput, allRecipes, fetchDrinkByName, filterRecipes, setSearchbarInput } = SearchbarGlobalState();
  const navigate = useNavigate();

  const handleOnClick = () => {
    fetchDrinkByName(searchInput);
    filterRecipes(searchInput, allRecipes);
    navigate("/search-result");
    setSearchbarInput(""); 
  };

  return (
    <div>
      <button className="bg-yellow-500 text-white px-2 py-1 rounded" onClick={handleOnClick}>
        Search
      </button>
    </div>
  );
};

export default SearchbarButton;


