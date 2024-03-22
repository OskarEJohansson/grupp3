import { create } from "zustand";
import { CardTypes } from "../../../types";
import axios from "axios";

export interface FoodGlobalStateInterface {
  category: string;
  article: Object;
  categoryData: CardTypes[];
  URL: string;
  setCategory: (category: string) => void;
  setArticle: (article: CardTypes) => void;
  setCategoryData: (url: string, category: string) => void;
}

const FoodGlobalState = create<FoodGlobalStateInterface>((set) => ({
  category: "",
  article: {},
  categoryData: [],
  URL: "https://sti-java-grupp3-mzba2l.reky.se",

  setCategory: (category: string) => {
    set(() => ({
      category: category,
    }));
  },

  setArticle: (article: CardTypes) => {
    set(() => ({
      article: article,
    }));
  },

  setCategoryData: async (url: string, category: string) => {
    try {
      const response = await axios.get(`${url}/categories/${category}/recipes`);
      if (response.status === 200) {
        console.log("SetCategoryData successful");
        set(() => ({
          categoryData: response.data,
        }));
      }
    } catch (error) {
      console.log("SetCategoryData Failed");
      console.log("SetCategoryData error message", error);
    }
  },
}));

export default FoodGlobalState;
