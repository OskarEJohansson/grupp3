/* import { create } from "zustand";

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface FormGlobalStateInterface {
  formData: {
    title: string;
    description: string;
    ratings: number;
    imageUrl: string;
    categories: string[];
    instructions: string[];
    ingredients: Ingredient[];
    price: number;
    timeInMins: number;
  };

  formDataIngredients: Ingredient;

  setTitle: (inputValue: string) => void;
  setDescription: (inputValue: string) => void;
  setImageUrl: (inputValue: string) => void;
  setCategories: (inputValue: string) => void;
  setInstructions: (inputValue: string) => void;
  setIngredientsName: (inputValue: string) => void;
  setIngredientsAmount: (inputValue: number) => void;
  setIngredientsUnit: (inputValue: string) => void;
  setFormDataIngredients: (newIngredients: Ingredient) => void;
  addIngredient: (ingredients: Ingredient) => void;
}

const FormGlobalState = create<FormGlobalStateInterface>((set) => ({
  formData: {
    title: "",
    description: "",
    imageUrl: "",
    categories: [],
    instructions: [],
    ingredients: [],
    price: 0,
    timeInMins: 0,
  },

  formDataIngredients: { name: "", amount: 0, unit: "" },

  setTitle: (inputValue: string) =>
    set((state) => ({
      formData: { ...state.formData, title: inputValue },
    })),

  setDescription: (inputValue: string) =>
    set((state) => ({
      formData: { ...state.formData, description: inputValue },
    })),

  setImageUrl: (inputValue: string) =>
    set((state) => ({
      formData: { ...state.formData, imageUrl: inputValue },
    })),

  setCategories: (inputValue: string) =>
    set((state) => ({
      formData: { ...state.formData, categories: [...state.formData.categories, inputValue] },
    })),

  setInstructions: (inputValue: string) =>
    set((state) => ({
      formData: { ...state.formData, instructions: [...state.formData.instructions, inputValue] },
    })),

  setIngredientsName: (inputValue: string) =>
    set((state) => ({
      formDataIngredients: { ...state.formDataIngredients, name: inputValue },
    })),

  setIngredientsAmount: (inputValue: number) =>
    set((state) => ({
      formDataIngredients: { ...state.formDataIngredients, amount: inputValue },
    })),

  setIngredientsUnit: (inputValue: string) =>
    set((state) => ({
      formDataIngredients: { ...state.formDataIngredients, unit: inputValue },
    })),

  setFormDataIngredients: (newIngredient: Ingredient) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ingredients: [...state.formData.ingredients, newIngredient],
      },
    })),

    addIngredient: (ingredient: Ingredient) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ingredients: [...state.formData.ingredients, ingredient],
      },
    })),

}));

export default FormGlobalState;
 */

import { create } from "zustand";

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface FormGlobalStateInterface {
  formData: {
    title: string;
    description: string;
    ratings: number[];
    imageUrl: string;
    categories: string[];
    instructions: string[];
    ingredients: Ingredient[];
    price: number;
    timeInMins: number;
  };

  setTitle: (inputValue: string) => void;
  setDescription: (inputValue: string) => void;
  setImageUrl: (inputValue: string) => void;
  setCategories: (inputValue: string) => void;
  setInstructions: (inputValue: string) => void;
  addIngredients: (newIngredient: Ingredient) => void;
  updateIngredients: (newIngredients: Ingredient[]) => void;
}

const FormGlobalState = create<FormGlobalStateInterface>((set) => ({
  formData: {
    title: "",
    description: "",
    ratings: [],
    imageUrl: "",
    categories: [],
    instructions: [],
    ingredients: [],
    price: 0,
    timeInMins: 0
  },

  setTitle: (inputValue: string) =>
    set((state) => ({
      formData: { ...state.formData, title: inputValue },
    })),

  setDescription: (inputValue: string) =>
    set((state) => ({
      formData: { ...state.formData, description: inputValue },
    })),

  setImageUrl: (inputValue: string) =>
    set((state) => ({
      formData: { ...state.formData, imageUrl: inputValue },
    })),

  setCategories: (inputValue: string) =>
    set((state) => ({
      formData: { ...state.formData, categories: [...state.formData.categories, inputValue] },
    })),

  setInstructions: (inputValue: string) =>
    set((state) => ({
      formData: { ...state.formData, instructions: [inputValue] },
    })),

  updateIngredients: (newIngredients: Ingredient[]) =>
    set((state) => ({
      formData: { ...state.formData, ingredients: newIngredients },
    })),

  addIngredients: (newIngredient: Ingredient) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ingredients: [...state.formData.ingredients, newIngredient],
      },
    })),
}));

export default FormGlobalState;
