import SearchbarGlobalState from "../utils/SearchbarGlobalState";
import { useNavigate } from "react-router-dom";

const SearchbarButton = () => {
  const { searchInput, allRecipes, fetchDrinkByName, filterRecipes } =
    SearchbarGlobalState();
  const navigate = useNavigate();

  const handleOnClick = () => {
    fetchDrinkByName(searchInput);
    filterRecipes(searchInput, allRecipes);
    navigate("/search-result");
  };
  return (
    <div>
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
};

export default SearchbarButton;
