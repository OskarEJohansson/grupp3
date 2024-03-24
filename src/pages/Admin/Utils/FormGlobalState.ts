import { create } from "zustand";

export interface FormGlobalStateInterface {
  formData: {
    title: string;
    description: string;
    imageUrl: string;
    categories: [];
    instructions: [];
    ingredients: [];
  };
  formDataIngredients: [{ name: string; amount: number; unit: string }];

  setTitle: (inputValue: string) => void;
  setDescription: (inputValue: string) => void;
  setImageUrl: (inputValue: string) => void;
  setCategories: (inputValue: string) => void;
  setInstructions: (inputValue: string) => void;
  setIngredientsName: (inputValue: string) => void;
  setIngredientsAmout: (inputValue: number) => void;
  setIngredientsUnit: (inputValue: string) => void;
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

  formDataIngredients: [{ name: "", amount: 0, unit: "" }],

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

  setIngredientsAmout: (inputValue: number) =>
    set((state) => ({
      formDataIngredients: { ...state.formDataIngredients, amount: inputValue },
    })),

  setIngredientsUnit: (inputValue: string) =>
    set((state) => ({
      formDataIngredients: { ...state.formDataIngredients, unit: inputValue },
    })),
}));

export default FormGlobalState;
