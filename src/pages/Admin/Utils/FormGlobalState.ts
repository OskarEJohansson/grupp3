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
    imageUrl: string;
    categories: string[];
    instructions: [];
    ingredients: Ingredient[];
  };

  formDataIngredients: { name: string; amount: number; unit: string };

  setTitle: (inputValue: string) => void;
  setDescription: (inputValue: string) => void;
  setImageUrl: (inputValue: string) => void;
  setCategories: (inputValue: string) => void;
  setInstructions: (inputValue: string) => void;
  setIngredientsName: (inputValue: string) => void;
  setIngredientsAmount: (inputValue: number) => void;
  setIngredientsUnit: (inputValue: string) => void;
  setFormDataIngredients: (newIngredients: any) => void;
  addFormDataIngredients: (newIngredients: any) => void;
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
      formData: { ...state.formData, Categories: inputValue },
    })),

  setInstructions: (inputValue: string) =>
    set((state) => ({
      formData: { ...state.formData, Instructions: inputValue },
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

  setFormDataIngredients: (newIngredient) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ingredients: [...state.formData.ingredients, newIngredient],
      },
    })),

  addFormDataIngredients: (newIngredient) =>
    set((state) => ({
      formData: {
        ...state.formData,
        ingredients: [...state.formData.ingredients, newIngredient],
      },
    })),
}));

export default FormGlobalState;
