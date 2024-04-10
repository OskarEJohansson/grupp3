/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { RecipeTypes } from "../../../types";

export interface CartGlobalStateInterface {
  globalCategory: string;
  globalArticleId: string;
  globalArticle: any;
  URL: string;
  cart: object[];
  setCart: () => void;
  setCategory: (itemCategory: string) => void;
  addToCart: (addItemToCart: any) => void;
  removeFromCart: (itemToRemove: any) => void;
  setGlobalArticleId: (articleId: string) => void;
  setGlobalArticle: (article: RecipeTypes) => void;
}

const CartGlobalState = create<CartGlobalStateInterface>((set) => ({
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

  setGlobalArticle: (article: RecipeTypes) =>
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

  removeFromCart: (itemToRemove: any) => {
    set((state) => ({
      cart: state.cart.filter((item) => item !== itemToRemove),
    }));
  },
}));

export default CartGlobalState;
