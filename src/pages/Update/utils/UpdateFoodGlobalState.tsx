import { create } from "zustand";

import axios from "axios";
import { IngredientsTypes } from "../../../types";

export interface UpdateFormGlobalState {
  formData: {
    id?: number;
    title: string;
    description: string;
    imageUrl: string;
    categories: string[];
    instructions: string[];
    ingredients: [];
  };

  ingredients: {
    name: string;
    amount: number;
    unit: string;
  };

  setIngredients: (key: string, value: string) => void;

  setData: (formData: any) => void;

  setChangedData: (key: string, value: string) => void;

  addIngredients: (newIngredients: IngredientsTypes) => void;

  updateRecipe: (URL: string, recipeId: number) => void;
}

const UpdateFoodGlobalState = create<UpdateFormGlobalState>((set) => ({
  formData: {
    id: 0,
    title: "",
    description: "",
    imageUrl: "",
    categories: [],
    instructions: [],
    ingredients: [],
  },

  ingredients: {
    name: "",
    amount: 0,
    unit: "",
  },

  setIngredients: (key: string, value: string) => {
    set((state) => ({
      ingredients: { ...state.ingredients, [key]: value },
    }));
  },

  setData: (formData: any) => {
    set(() => ({
      formData: formData,
    }));
  },

  setChangedData: (key: string, value: string) => {
    set((state) => ({
      formData: { ...state.formData, [key]: value },
    }));
  },

  addIngredients: (newIngredients: IngredientsTypes) => {
    (state: any) => ({
      formData: { ...state.formData, ingredients: newIngredients },
    });
  },

  updateRecipe: async (URL: string, recipeId: number) => {
    try {
      const response = await axios.patch(`${URL}/recipes/${recipeId}`);
      if (response.status === 200) {
        console.log("Update Recipe successful,", response.data);
      } else console.log("Update Recipe failed", response.status);
    } catch (error) {
      console.log("Update Recipe failed", error);
    }
  },
}));

export default UpdateFoodGlobalState;
