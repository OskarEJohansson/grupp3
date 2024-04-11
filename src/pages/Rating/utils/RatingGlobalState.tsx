import axios from "axios";
import { create } from "zustand";

export interface RatingGlobalStateInterface {
  ratings: [];
  recipeId: string | undefined;
  averageRating: number;

  setRecipeId: (id: string) => void;
  postRating: (id: string, rating: object) => void;
  fetchAverageRating: (id: string) => void;
}

const RatingGlobalState = create<RatingGlobalStateInterface>((set) => ({
  ratings: [],
  recipeId: undefined,
  averageRating: 0,

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

  fetchAverageRating: async (id: string) => {
    try {
      const response = await axios.get(
        `https://sti-java-grupp3-mzba2l.reky.se/recipes/${id}`
      );

      const { avgRating } = response.data;
      console.log("Average Rating:", avgRating);

      set(() => ({
        averageRating: avgRating !== undefined ? avgRating : 0,
      }));
    } catch (error) {
      console.error("Error fetching average rating:", error);
    }
  },
}));

export default RatingGlobalState;
