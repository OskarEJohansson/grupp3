import  { useEffect } from "react";
import SearchbarGlobalState from "../utils/SearchbarGlobalState";
import { useState } from "react";

const SearchbarInput = () => {
  const { setSearchbarInput, fetchRecipes, allRecipes, searchInput } = SearchbarGlobalState();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchbarInput(value);
  };

  const [, setInputValue] = useState("");

  useEffect(() => {
    if (allRecipes.length === 0) {
      fetchRecipes();
    }
    setInputValue(searchInput);
  }, [allRecipes, fetchRecipes, searchInput]);

  return (
    <div>
      <input type="text" placeholder="Search.." value={searchInput} className="border border-gray-300 px-2 py-1 rounded" onChange={handleOnChange} />
    </div>
  );
};

export default SearchbarInput;
