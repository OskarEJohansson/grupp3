import axios from "axios";
import { create } from "zustand";
import { fetchCategoryTypes } from "../../../types";

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface AdminGlobalStateInterface {
  categoryData: fetchCategoryTypes[];
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
  setInstructions: (inputValue: string[]) => void;
  addInstructions: (newInstructions: string) => void;
  addIngredients: (newIngredient: Ingredient) => void;
  updateIngredients: (newIngredients: Ingredient[]) => void;
  setPrice: (inputValue: number) => void;
  setTimeInMins: (inputValue: number) => void;
  resetFormData: () => void;
  fetchCategoryData: () => void;
}

const initialFormData = {
  title: "",
  description: "",
  ratings: [],
  imageUrl: "",
  categories: [],
  instructions: [""],
  ingredients: [{ name: "", amount: 0, unit: "" }],
  price: 0,
  timeInMins: 0,
};

const AdminGlobalState = create<AdminGlobalStateInterface>((set) => ({
  categoryData: [],

  formData: { ...initialFormData },

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
      formData: {
        ...state.formData,
        categories: [...state.formData.categories, inputValue],
      },
    })),

  setInstructions: (newInstructions: string[]) =>
    set((state) => ({
      formData: { ...state.formData, instructions: newInstructions },
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

  addInstructions: (newInstructions: string) =>
    set((state) => ({
      formData: {
        ...state.formData,
        instructions: [...state.formData.instructions, newInstructions],
      },
    })),

    setPrice: (inputValue: number) =>
  set((state) => ({
    formData: { ...state.formData, price: inputValue },
  })),

  setTimeInMins: (inputValue: number) =>
    set((state) => ({
      formData: { ...state.formData, timeInMins: inputValue },
    })),

  resetFormData: () => {
    console.log("Resetting form data...");
    set(() => ({
      formData: {
        ...initialFormData,
      },
    }));
  },

  fetchCategoryData: async () => {
    try {
      const response = await axios.get(
        "https://sti-java-grupp3-mzba2l.reky.se/categories"
      );

      if (response.status === 200) {
        console.log("Fetch categories successful", response.data);

        set(() => ({
          categoryData: response.data,
        }));
      } else {
        console.log("Fetch categories failed", response.status);
      }
    } catch (error) {
      console.log("Fetch category data catch error", error);
    }
  },
}));

export default AdminGlobalState;
