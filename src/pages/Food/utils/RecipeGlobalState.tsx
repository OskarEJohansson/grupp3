import { create } from "zustand";
import { CardTypes, RecipeTypes } from "../../../types";
import axios from "axios";

export interface RecipeGlobalStateInterface {
  category: string;
  article: Object;
  categoryData: RecipeTypes[];
  URL: string;
  setCategory: (category: string) => void;
  setArticle: (article: RecipeTypes) => void;
  setCategoryData: (url: string, category: string) => void;
  fetchRecipe: (url: string) => void;
}

const RecipeGlobalState = create<RecipeGlobalStateInterface>((set) => ({
  category: "",
  article: {},
  categoryData: [],
  URL: "https://sti-java-grupp3-mzba2l.reky.se",

  setCategory: (category: string) => {
    set(() => ({
      category: category,
    }));
  },

  setArticle: (article: RecipeTypes) => {
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

  fetchRecipe: async (url: string) => {
    try {
      const response = await axios.get(`${url}/recipes`);
      if (response.status === 200) {
        console.log("RESPONSE DATA:", response.data);
        console.log("FetchRecipe successful");
        set(() => ({
          categoryData: response.data,
        }));
      }
    } catch (error) {
      console.log("FetchRecipe Failed");
      console.log("FetchRecipe error message", error);
    }
  },
}));

export default RecipeGlobalState;
