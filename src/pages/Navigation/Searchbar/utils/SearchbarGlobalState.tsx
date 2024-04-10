/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from "zustand";
import axios from "axios";
import { DrinkDetails, RecipeTypes } from "../../../../types";

export interface searchbarGlobalStateInterface {
  searchInput: string;
  drinks: DrinkDetails[];
  allRecipes: RecipeTypes[];
  filteredRecipes: RecipeTypes[];

  setSearchbarInput: (searchInput: string) => void;
  fetchDrinkByName: (searchInput: string) => void;
  fetchRecipes: () => void;
  filterRecipes: (searchInput: string, allRecipes: any) => void;
}

const SearchbarGlobalState = create<searchbarGlobalStateInterface>((set) => ({
  searchInput: "",
  drinks: [],
  allRecipes: [],
  filteredRecipes: [],

  setSearchbarInput: (searchbarInput: string) => {
    set(() => ({
      searchInput: searchbarInput,
    }));
  },

  fetchDrinkByName: async (searchInput: string) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`
      );
      if (response.status === 200) {
        console.log("FetchDrinkByName successful", response.data.drinks);
        set(() => ({
          drinks: response.data.drinks,
        }));
      } else {
        console.log("FetchDrinkByName FAILED", response.status);
      }
    } catch (error) {
      console.log("FetchDrinkByName catch error", error);
    }
  },

  fetchRecipes: async () => {
    try {
      const response = await axios.get(
        `https://sti-java-grupp3-mzba2l.reky.se/recipes`
      );
      if (response.status === 200) {
        console.log("Fetch Recipes inside search successful", response.data);
        set(() => ({
          allRecipes: response.data,
        }));
      } else {
        console.log("fetchRecipes in Search failed", response.status);
      }
    } catch (error) {
      console.log("Fetch Recipes inside search catch error", error);
    }
  },

  filterRecipes: (searchInput: string, allRecipes: any) => {
    console.log(allRecipes);
    set(() => ({
      filteredRecipes: allRecipes.filter((recipe: RecipeTypes) =>
        recipe.title.toLowerCase().includes(searchInput.toLowerCase())
      ),
    }));
  },
}));

export default SearchbarGlobalState;
