import  { useEffect } from "react";
import SearchbarGlobalState from "../utils/SearchbarGlobalState";

const SearchbarInput = () => {
  const { setSearchbarInput, fetchRecipes, allRecipes } = SearchbarGlobalState();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchbarInput(value);
  };

  useEffect(() => {
    if (allRecipes.length === 0) {
      fetchRecipes();
    }
  }, [allRecipes, fetchRecipes]);

  return (
    <div>
      <input type="text" placeholder="Search.." className="border border-gray-300 px-2 py-1 rounded" onChange={handleOnChange} />
    </div>
  );
};

export default SearchbarInput;
