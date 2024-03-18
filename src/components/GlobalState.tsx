/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { CardTypes } from "../types";

interface GlobalStateInterface {
  globalFoodCategory: string;
  globalArticleId: string;
  globalArticle: {};
  URL: string;
  cart: any[];
  addToCart: (addItemToCart: any) => void;
  setGlobalArticleId: (aritcleId: string) => void;
  setGlobalArticle: (article: CardTypes) => void;
}

const GlobalState = create<GlobalStateInterface>((set) => ({
  globalFoodCategory: "",
  globalArticleId: "",
  globalArticle: {},
  URL: "https://sti-java-grupp3-mzba2l.reky.se",
  cart: [],

  setCategory: (itemCategory: string) => {
    set(() => ({
      globalFoodCategory: itemCategory,
    }));
  },

  setGlobalArticleId: (articleId: string) =>
    set(() => ({
      globalArticleId: articleId,
    })),

  setGlobalArticle: (article: CardTypes) =>
    set(() => ({
      globalArticle: article,
    })),

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
