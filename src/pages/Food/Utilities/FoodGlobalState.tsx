import { create } from "zustand";
import { CardTypes } from "../../../types";
import axios from "axios";

export interface FoodGlobalStateInterface {
  category: string;
  article: Object;
  categoryData: CardTypes[];
  setCategory: (category: string) => void;
  setArticle: (article: CardTypes) => void;
  setCategoryData: (category: string) => void;
}

const FoodGlobalState = create<FoodGlobalStateInterface>((set) => ({
  category: "",
  article: {},
  categoryData: [],
  setCategory: () => {},
  setArticle: () => {},
  setCategoryData: () => {},
}));

export default FoodGlobalState;
