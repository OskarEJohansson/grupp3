/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import SearchbarGlobalState from "../utils/SearchbarGlobalState";

const SearchbarInput = () => {
  const { setSearchbarInput, fetchRecipes, allRecipes } =
    SearchbarGlobalState();

  const handleOnChange = (e: any) => {
    const { value } = e.target;
    setSearchbarInput(value);
  };

  useEffect(() => {
    if (allRecipes.length === 0) {
      fetchRecipes();
    }
  });

  return (
    <div>
      <input type="text" onChange={handleOnChange} />
    </div>
  );
};

export default SearchbarInput;
