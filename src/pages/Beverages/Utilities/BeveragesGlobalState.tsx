/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { BeverageDetails, BeverageTypes } from "../../../types";
import axios from "axios";

export interface BeverageGlobalStateInterface {
  beverage: Object;
  beverageList: BeverageTypes[];
  alcoholicBeverageList: BeverageTypes[];
  nonAlcoholicBeverageList: BeverageTypes[];
  category: string;
  setBeverage: (Object: BeverageDetails) => void;
  setCategory: (category: string) => void;
  fetchBeverage: (drinkId: string) => void;
  fetchAlcoholicBeverage: () => void;
  fetchNonAlcoholicBeverage: () => void;
}

const BeverageGlobalState = create<BeverageGlobalStateInterface>((set) => ({
  beverage: [],
  beverageList: [],
  category: "",
  alcoholicBeverageList: [],
  nonAlcoholicBeverageList: [],

  setBeverage: (article: any) => {
    set(() => ({
      beverage: article,
    }));
  },

  setCategory: (category: string) => {
    set(() => ({
      category: category,
    }));
  },

  fetchBeverage: async (drinkId: string) => {
    let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

    try {
      const response = await axios.get(`${url}${drinkId}`);
      if (response.status === 200) {
        console.log("response.data", response.data.drinks);
        set(() => ({
          beverage: response.data.drinks,
        }));
      }
      console.log("url", `${url}${drinkId}`);
    } catch (error) {
      console.error("Error fetching drink", error);
    }
  },
  fetchAlcoholicBeverage: async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
      );

      if (response.status === 200) {
        console.log("Fetch Alcoholic drinks successful", response.data.drinks);
        set(() => ({
          alcoholicBeverageList: response.data.drinks,
          beverageList: response.data.drinks,
        }));
      } else {
        console.log("Error fetching alcoholic drinks", response.status);
      }
    } catch (error) {
      console.log("Error fetching alcoholic drinks", error);
    }
  },

  fetchNonAlcoholicBeverage: async () => {
    try {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      );

      console.log(response);

      if (response.status === 200) {
        console.log("Fetch Non Alcoholic drinks successful");

        set(() => ({
          nonAlcoholicBeverageList: response.data.drinks,
          beverageList: response.data.drinks,
        }));
      }
    } catch (error) {
      console.log("Error fetching Non Alcoholic drinks", error);
    }
  },
}));

export default BeverageGlobalState;
