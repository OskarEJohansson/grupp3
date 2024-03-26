import { create } from "zustand";
import { DrinkDetails, DrinkTypes } from "../../../types";
import axios from "axios";

export interface BeverageGlobalStateInterface {
  drink: DrinkDetails[];
  drinkList: Object[];
  alcoholicDrinkList: [];
  nonAlcoholicDrinkList: [];
  setDrink: (Object: DrinkDetails) => void;
  fetchDrink: (drinkId: string) => void;
  fetchAlcoholicDrinks: () => void;
  fetchNonAlcoholicDrinks: () => void;
}

const BeverageGlobalState = create<BeverageGlobalStateInterface>((set) => ({
  drink: [],
  drinkList: [],
  alcoholicDrinkList: [],
  nonAlcoholicDrinkList: [],

  setDrink: (article: any) => {
    set(() => ({
      drink: article,
    }));
  },
  fetchDrink: async (drinkId: string) => {
    let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
    try {
      const response = await axios.get(`${url}${drinkId}`);
      if (response.status === 200) {
        console.log("response.data", response.data);
        set(() => ({
          drink: response.data,
        }));
      }
      console.log("url", `${url}${drinkId}`);
    } catch (error) {
      console.error("Error fetching drink", error);
    }
  },
  fetchAlcoholicDrinks: async () => {
    try {
      const response = await axios.get(
        "www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
      );

      if (response.status === 200) {
        console.log("Fetch Alcoholic drinks successful", response.data);
        set(() => ({
          alcoholicDrinkList: response.data,
        }));
      } else {
        console.log("Error fetching alcoholic drinks", response.status);
      }
    } catch (error) {
      console.log("Error fetching alcoholic drinks", error);
    }
  },

  fetchNonAlcoholicDrinks: async () => {
    try {
      const response = await axios.get(
        "www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      );

      if (response.status === 200) {
        console.log("Fetch Non Alcoholic drinks successful", response.data);
        set(() => ({
          nonAlcoholicDrinkList: response.data,
        }));
      }
    } catch (error) {
      console.log("Error fetching Non Alcoholic drinks", error);
    }
  },
}));

export default BeverageGlobalState;
