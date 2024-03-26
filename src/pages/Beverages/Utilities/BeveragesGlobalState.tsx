import { create } from "zustand";
import { DrinkDetails, DrinkTypes } from "../../../types";
import axios from "axios";

export interface BeverageGlobalStateInterface {
  beverage: DrinkDetails[];
  beverageList: Object[];
  alcoholicBeverageList: [];
  nonAlcoholicBeverageList: [];
  setDrink: (Object: DrinkDetails) => void;
  fetchDrink: (drinkId: string) => void;
  fetchAlcoholicBeverageDrinks: () => void;
  fetchNonAlcoholicBeverageDrinks: () => void;
}

const BeverageGlobalState = create<BeverageGlobalStateInterface>((set) => ({
  beverage: [],
  beverageList: [],
  alcoholicBeverageList: [],
  nonAlcoholicBeverageList: [],

  setDrink: (article: any) => {
    set(() => ({
      beverage: article,
    }));
  },
  fetchDrink: async (drinkId: string) => {
    let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
    try {
      const response = await axios.get(`${url}${drinkId}`);
      if (response.status === 200) {
        console.log("response.data", response.data);
        set(() => ({
          beverage: response.data,
        }));
      }
      console.log("url", `${url}${drinkId}`);
    } catch (error) {
      console.error("Error fetching drink", error);
    }
  },
  fetchAlcoholicBeverageDrinks: async () => {
    try {
      const response = await axios.get(
        "www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
      );

      if (response.status === 200) {
        console.log("Fetch Alcoholic drinks successful", response.data);
        set(() => ({
          alcoholicBeverageList: response.data,
        }));
      } else {
        console.log("Error fetching alcoholic drinks", response.status);
      }
    } catch (error) {
      console.log("Error fetching alcoholic drinks", error);
    }
  },

  fetchNonAlcoholicBeverageDrinks: async () => {
    try {
      const response = await axios.get(
        "www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      );

      if (response.status === 200) {
        console.log("Fetch Non Alcoholic drinks successful", response.data);
        set(() => ({
          nonAlcoholicBeverageList: response.data,
        }));
      }
    } catch (error) {
      console.log("Error fetching Non Alcoholic drinks", error);
    }
  },
}));

export default BeverageGlobalState;
