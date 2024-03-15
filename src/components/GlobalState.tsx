/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import Cart from "./Cart";

interface GlobalStateInterface {
  globalFoodCategory: string;
  URL: string;
  cart: any[];
  addToCart: (addItemToCart: any) => void;
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

  setCart: () =>
    set((state) => ({
      cart: [...state.cart],
    })),

  addToCart: (addItemToCart: any) => {
    set((state) => ({
      cart: [...state.cart, addItemToCart],
    }));
  },
}));

export default GlobalState;
