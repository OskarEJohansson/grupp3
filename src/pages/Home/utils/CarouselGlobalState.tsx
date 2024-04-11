import axios from "axios";
import { create } from "zustand";
import { RecipeTypes } from "../../../types";

export interface CarouselGlobalStateInterface {
  ratingList: [];
  filterRatingList: () => void;
}

const CarouselGlobalState = create<CarouselGlobalStateInterface>((set) => ({
  ratingList: [],

  filterRatingList: async () => {
    const response = await axios.get(
      `https://sti-java-grupp3-mzba2l.reky.se/recipes`
    );

    if (response.status === 200) {
      const tempList = response.data.sort((a: RecipeTypes, b: RecipeTypes) => {
        if (a.avgRating > b.avgRating) return -1;
        return 0;
      });

      set(() => ({
        ratingList: tempList.slice(0, 3),
      }));
    }
  },
}));

export default CarouselGlobalState;
