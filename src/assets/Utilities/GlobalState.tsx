/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { CardTypes } from "../../types";

export interface GlobalStateInterface {
  globalCategory: string;
  globalArticleId: string;
  globalArticle: any;
  URL: string;
  cart: object[];
  setCart: () => void;
  setCategory: (itemCategory: string) => void;
  addToCart: (addItemToCart: any) => void;
  setGlobalArticleId: (aritcleId: string) => void;
  setGlobalArticle: (article: CardTypes) => void;
}

const GlobalState = create<GlobalStateInterface>((set) => ({
  globalCategory: "",
  globalArticleId: "",
  globalArticle: {},
  URL: "https://sti-java-grupp3-mzba2l.reky.se",
  cart: [],

  setCategory: (itemCategory: string) => {
    set((state) => ({
      ...state,
      globalCategory: itemCategory,
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
