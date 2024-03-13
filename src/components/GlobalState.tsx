import { create } from "zustand";

interface GlobalStateInterface {
  globalFoodCategory: string;
  URL: string;
}

const GlobalState = create<GlobalStateInterface>((set) => ({
  globalFoodCategory: "",
  URL: "https://sti-java-grupp3-mzba2l.reky.se",

  setCategory: (itemCategory: string) => {
    set(() => ({
      globalFoodCategory: itemCategory,
    }));
  },
}));

export default GlobalState;
