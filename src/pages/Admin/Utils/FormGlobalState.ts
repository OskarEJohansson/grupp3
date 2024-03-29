import { create } from "zustand";

export interface FormGlobalStateInterface {
  formData: {
    title: string;
    description: string;
    imageUrl: string;
    categories: string[];
    instructions: string[];
  };

  setters: {
    [key: string]: (inputValue: string) => void; // Define setters as a dynamic object
  };
}

const FormGlobalState = create<FormGlobalStateInterface>((set) => ({
  formData: {
    title: "",
    description: "",
    imageUrl: "",
    categories: [],
    instructions: [],
  },

  setters: {
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
  },
}));

export default FormGlobalState;
