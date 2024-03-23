import axios from "axios";
import { create } from "zustand";
import { CardTypes } from "../../../types.ts";

export interface FormGlobalStateInterface {
  formData: {
    title: string;
    description: string;
    ratings: [];
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

  submitForm: (formData: CardTypes) => void;
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

  submitForm: async (formData: CardTypes) => {
    try {
      const response = await axios.post(
        "https://sti-java-grupp3-mzba2l.reky.se/recipes",
        formData
      );

      if (response.status === 200) {
        console.log("Submit form response status:", response.status);
        console.log("Submit form response data:", response.data);
      } else {
        console.log("Error posting submitForm", response.status);
      }
    } catch (error) {
      console.log("Error posting submitForm", error);
    }
  },
}));

export default FormGlobalState;
