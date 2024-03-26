import { create } from "zustand";
import { DrinkDetails, DrinkTypes } from "../../../types";
import axios from "axios";

export interface BeverageGlobalStateInterface {
  drink: DrinkDetails[];
  drinkList: Object[];
  setDrink: (Object: DrinkDetails) => void;
  fetchDrink: (drinkId: string) => void;
}

const BeverageGlobalState = create<BeverageGlobalStateInterface>((set) => ({
  drink: [],
  drinkList: [],

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
}));

export default BeverageGlobalState;
