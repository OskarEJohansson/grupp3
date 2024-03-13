/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface GlobalStateInterface {
  globalFoodCategory: string;
  URL: string;
  cart: any[];
}


const GlobalState = create<GlobalStateInterface>((set) => ({
  globalFoodCategory: "",
  URL: "https://sti-java-grupp3-mzba2l.reky.se",
  cart: [],

  setCategory: (itemCategory: string) => {
    set(() => ({
      globalFoodCategory: itemCategory,
    }));
  },

  setCart:({item}: any) => {
    set(() => ({
      cart: [...item, item]
    }))
  },
}));

export default GlobalState;
