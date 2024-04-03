/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { BeverageDetails, BeverageTypes } from "../../../types";
import axios from "axios";

export interface DrinkGlobalStateInterface {
  drink: Object;
  drinkList: BeverageTypes[];
  alcoholicDrinkList: BeverageTypes[];
  nonAlcoholicDrinkList: BeverageTypes[];
  category: string;
  setDrink: (Object: BeverageDetails) => void;
  setCategory: (category: string) => void;
  fetchDrink: (drinkId: string) => void;
  fetchAlcoholicDrink: () => void;
  fetchNonAlcoholicDrink: () => void;
}

const DrinkGlobalState = create<DrinkGlobalStateInterface>((set) => ({
  drink: [],
  drinkList: [],
  category: "",
  alcoholicDrinkList: [],
  nonAlcoholicDrinkList: [],

  setDrink: (article: any) => {
    set(() => ({
      drink: article,
    }));
  },

  setCategory: (category: string) => {
    set(() => ({
      drink: category,
    }));
  },

  fetchDrink: async (drinkId: string) => {
    let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

    try {
      const response = await axios.get(`${url}${drinkId}`);
      if (response.status === 200) {
        console.log("response.data", response.data.drinks);
        set(() => ({
          drink: response.data.drinks,
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

      console.log(response);

      if (response.status === 200) {
        console.log("Fetch Non Alcoholic drinks successful");

        set(() => ({
          nonAlcoholicDrinkList: response.data.drinks,
          DrinkList: response.data.drinks,
        }));
      }
    } catch (error) {
      console.log("Error fetching Non Alcoholic drinks", error);
    }
  },
}));

export default DrinkGlobalState;
