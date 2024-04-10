/* eslint-disable @typescript-eslint/no-explicit-any */

import {create} from 'zustand'
import axios from 'axios';



export interface searchbarGlobalStateInterface {

  searchInput: string;
  // URL: string;
  drinks: [];
  recipes: [];
  searchResultList: any[];
  setSearchbarInput: (searchInput: string) => void;
  fetchDrinkByName: (searchInput: string) => void;
  // fetchRecipes: (searchInput: string) => void;
  
}

const SearchbarGlobalState = create<searchbarGlobalStateInterface>((set) => ({

searchInput: "",
drinks: [],
recipes: [],
searchResultList: [],


setSearchbarInput: (searchbarInput: string) => {
 set(() => ({
  searchInput: searchbarInput
 }))
},
fetchDrinkByName: async (searchInput: string)  =>  {
  try {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`)
    if (response.status === 200) {
      console.log("FetchDrinkByName successful", response.data.drinks);
      set(() => ({ searchResultList: response.data.drinks }))
  } else {
    console.log("FetchDrinkByName FAILED", response.status)
  }

  } catch (error) {
    console.log("FetchDrinkByName catch error", error)
  }
},

}))

export default SearchbarGlobalState