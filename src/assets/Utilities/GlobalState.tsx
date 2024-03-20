/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { CardTypes } from "../../types";
import axios from "axios";

export interface GlobalStateInterface {
  globalCategory: string;
  globalArticleId: string;
  globalArticle: object;
  globalCategoryData: CardTypes[];
  URL: string;
  cart: object[];
  setCart: () => void;
  setCategory: (itemCategory: string) => void;
  addToCart: (addItemToCart: any) => void;
  setGlobalCategoryData: (url: string, globalCategory: string) => void;
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
    set((state) => ({
      ...state,
      globalCategory: itemCategory,
    }));
  },

  setGlobalCategoryData: async (url: string, globalCategory: string) => {
    try {
      const response = await axios.get(
        `${url}/categories/${globalCategory}/recipes`
      );

      if (response.status === 200) {
        console.log(response.data);
        set(() => ({
          globalCategoryData: response.data,
        }));
      }
    } catch (error) {
      console.log(error);
    }
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
