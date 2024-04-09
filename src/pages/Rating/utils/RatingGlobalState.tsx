import axios from "axios";
import { create } from "zustand";

export interface RatingGlobalStateInterface {
  ratings: [];
  recipeId: string | undefined;

  setRecipeId: (id: string) => void;
  postRating: (id: string, rating: object) => void;
}

const RatingGlobalState = create<RatingGlobalStateInterface>((set) => ({
  ratings: [],
  recipeId: undefined,

  setRecipeId: (id: string) => {
    set(() => ({
      recipeId: id,
    }));
  },

  postRating: async (id: string, rating: object) => {
    console.log("RATING INSIDE POST ", rating);
    try {
      const response = await axios.post(
        `https://sti-java-grupp3-mzba2l.reky.se/recipes/${id}/ratings`,
        { rating: rating }
      );

      if (response.status === 200) {
        console.log("Post Rating successful", response.status);
        console.log("Post Rating successful", response.data);
      } else console.log("Post Rating Failed", response.status);
    } catch (error) {
      console.log("Post Rating Catch Error", error);
    }
  },
}));

export default RatingGlobalState;
