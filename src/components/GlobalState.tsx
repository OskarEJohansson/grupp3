/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { CardTypes } from "../types";

export interface GlobalStateInterface {
  globalCategory: string;
  globalArticleId: string;
  globalArticle: object;
  globalCategoryData: CardTypes[];
  URL: string;
  cart: any[];
  setCart: () => void;
  setCategory: (itemCategory: string) => void;
  addToCart: (addItemToCart: any) => void;
  setGlobalCategoryData: (categoryData: CardTypes[]) => void;
  setGlobalArticleId: (aritcleId: string) => void;
  setGlobalArticle: (article: CardTypes) => void;
}

const GlobalState = create<GlobalStateInterface>((set) => ({
  globalCategory: "",
  globalArticleId: "",
  globalArticle: {},
  globalCategoryData: [],
  URL: "https://sti-java-grupp3-mzba2l.reky.se",
  cart: [],

  setCategory: (itemCategory: string) => {
    set(() => ({
      globalCategory: itemCategory,
    }));
  },

  setGlobalCategoryData: (categoryData: CardTypes[]) => {
    set(() => ({
      globalCategoryData: categoryData,
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
