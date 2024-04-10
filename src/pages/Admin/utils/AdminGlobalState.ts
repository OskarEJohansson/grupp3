import { create } from "zustand";

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface AdminGlobalStateInterface {
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
    timeInMins: 0
};

const AdminGlobalState = create<AdminGlobalStateInterface>((set) => ({
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
      formData: { ...state.formData, categories: [...state.formData.categories, inputValue] },
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

}));

export default AdminGlobalState;