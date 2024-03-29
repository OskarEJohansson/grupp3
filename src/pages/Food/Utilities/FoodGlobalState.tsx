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
  patchArticle: (articleId: string, update: CardTypes, url: string) => void;
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

patchArticle: async (articleId: string, update: CardTypes, url: string) => {
    console.log("hejhej")
    try {
      const response = await axios.patch(`${url}/recipes/${articleId}`, update)
      if(response.status === 200) {
        console.log(response.data)
      }

    } catch (error) {
      console.log("Patch article failed",error)
    }
  },
}));

export default FoodGlobalState;
