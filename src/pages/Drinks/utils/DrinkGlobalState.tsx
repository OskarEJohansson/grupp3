/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { DrinkDetails, DrinkTypes } from "../../../types";
import axios from "axios";

export interface DrinkGlobalStateInterface {
  drink: object;
  drinkList: DrinkTypes[];
  alcoholicDrinkList: DrinkTypes[];
  nonAlcoholicDrinkList: DrinkTypes[];
  category: string;
  drinkSuggestion: DrinkTypes;
  setDrink: (Object: DrinkDetails) => void;
  setCategory: (category: string) => void;
  fetchDrink: (drinkId: string) => void;
  fetchAlcoholicDrink: () => void;
  fetchNonAlcoholicDrink: () => void;
  fetchDrinkByRecipeCategory: (category: string, index: number) => void;
}

const DrinkGlobalState = create<DrinkGlobalStateInterface>((set) => ({
  drink: {},
  drinkList: [],
  category: "",
  alcoholicDrinkList: [],
  nonAlcoholicDrinkList: [],
  drinkSuggestion: { strDrink: "", strDrinkThumb: "", idDrink: "" },

  setDrink: (article: any) => {
    set(() => ({
      drink: article,
    }));
  },

  setCategory: (category: string) => {
    set(() => ({
      category: category,
    }));
  },

  fetchDrink: async (drinkId: string) => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

    try {
      const response = await axios.get(`${url}${drinkId}`);
      if (response.status === 200) {
        console.log("response.data", response.data.drinks);
        set(() => ({
          drink: response.data.drinks[0],
        }));
      }
      console.log("url", `${url}${drinkId}`);
    } catch (error) {
      console.error("Error fetching drink", error);
    }
  },
  fetchAlcoholicDrink: async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
      );

      if (response.status === 200) {
        console.log("Fetch Alcoholic drinks successful", response.data.drinks);
        set(() => ({
          alcoholicDrinkList: response.data.drinks,
          drinkList: response.data.drinks,
        }));
      } else {
        console.log("Error fetching alcoholic drinks", response.status);
      }
    } catch (error) {
      console.log("Error fetching alcoholic drinks", error);
    }
  },

  fetchNonAlcoholicDrink: async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      );

      console.log(response.data.drinks);

      if (response.status === 200) {
        console.log("Fetch Non Alcoholic drinks successful");

        set(() => ({
          nonAlcoholicDrinkList: response.data.drinks,
          drinkList: response.data.drinks,
        }));
      }
    } catch (error) {
      console.log("Error fetching Non Alcoholic drinks", error);
    }
  },

  fetchDrinkByRecipeCategory: async (category: string, index: number) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
      );

      if (response.status === 200) {
        console.log(
          "fetchDrinkByCategory successful",
          response.data.drinks[index]
        );
        set(() => ({
          drinkSuggestion: response.data.drinks[index],
        }));
      } else {
        console.log("FetchDrinkByCategory failed", response.status);
      }
    } catch (error) {
      console.log("FetchDrinkByCategory catch error", error);
    }
  },
}));

export default DrinkGlobalState;
