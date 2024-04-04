import { create } from "zustand";

import axios from "axios";
import { IngredientsTypes, RecipeTypes } from "../../../types";

export interface UpdateRecipeGlobalStateInterface {
  formData: {
    _id: number;
    title: string;
    description: string;
    imageUrl: string;
    categories: string[];
    instructions: string[];
    ingredients: [];
    price: number;
  };

  ingredients: {
    name: string;
    amount: number;
    unit: string;
  };

  id: number;

  setId: (id: number) => void;

  setIngredients: (key: string, value: string) => void;

  setData: (formData: any) => void;

  setChangedData: (key: string, value: string) => void;

  addIngredients: (newIngredients: IngredientsTypes) => void;

  updateRecipe: (URL: string, recipeId: number, formData: object) => void;
}

const UpdateRecipeGlobalState = create<UpdateRecipeGlobalStateInterface>(
  (set) => ({
    formData: {
      _id: 0,
      title: "",
      description: "",
      imageUrl: "",
      categories: [],
      instructions: [],
      ingredients: [],
      price: 0,
    },

    ingredients: {
      name: "",
      amount: 0,
      unit: "",
    },

    id: 0,

    setId: (id: number) => {
      set(() => ({
        id: id,
      }));
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

    updateRecipe: async (URL: string, recipeId: number, formData: object) => {
      try {
        const response = await axios.patch(
          `${URL}/recipes/${recipeId}`,
          formData
        );
        if (response.status === 200) {
          console.log("Update Recipe successful,", response.data);
        } else console.log("Update Recipe failed", response.status);
      } catch (error) {
        console.log("Update Recipe failed", error);
      }
    },
  })
);

export default UpdateRecipeGlobalState;
