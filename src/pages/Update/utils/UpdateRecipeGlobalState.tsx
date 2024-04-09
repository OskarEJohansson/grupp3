import { create } from "zustand";
import { produce } from "immer";

import axios from "axios";
import { RecipeTypes } from "../../../types";

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
    _id: string;
  };

  id: number;

  setId: (id: number) => void;

  setIngredients: (id: string, key: string, value: string) => void;

  setData: (formData: RecipeTypes) => void;

  setChangedData: (key: string, value: string) => void;

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
      _id: "",
    },

    id: 0,

    setId: (id: number) => {
      set(() => ({
        id: id,
      }));
    },

    setIngredients: (id: string, key: string, value: string) => {
      set(
        produce((state) => {
          const index = state.formData.ingredients.findIndex(
            (ingredient: RecipeTypes) => ingredient._id === id
          );
          state.formData.ingredients[index][key] = value;
        })
      );
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
