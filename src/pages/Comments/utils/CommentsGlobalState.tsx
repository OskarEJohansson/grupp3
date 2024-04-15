import { create } from "zustand";
import axios from "axios";
import { CommentTypes, RecipeTypes } from "../../../types";

export interface CommentsGlobalStateInterface {
  comment: CommentTypes;
  comments: CommentTypes[];
  recipeId: string;
  article: RecipeTypes;
  URL: string;
  setComment: (key: string, value: string) => void;
  setRecipeId: (id: string) => void;
  setRecipe: (article: RecipeTypes) => void;
  postComment: (URL: string, recipeId: string, comment: CommentTypes) => void;
  fetchComments: (url: string, recipeId: string) => void;
}

const CommentsGlobalState = create<CommentsGlobalStateInterface>((set) => ({
  comment: {
    name: "",
    comment: "",
  },
  comments: [],
  recipeId: localStorage.getItem("recipeId") || "",
  article: JSON.parse(localStorage.getItem("article") || "{}") as RecipeTypes,

  URL: "https://sti-java-grupp3-mzba2l.reky.se",

  setComment: (key: string, value: string) => {
    set((state) => ({
      comment: { ...state.comment, [key]: value },
    }));
  },

  setRecipeId: (id: string) => {
    localStorage.setItem("recipeId", id);
    set(() => ({
      recipeId: id,
    }));
  },

  setRecipe: (article: RecipeTypes) => {
    localStorage.setItem("article", JSON.stringify(article));
    set(() => ({
      article,
    }));
  },

  postComment: async (URL: string, recipeId: string, comment: CommentTypes) => {
    console.log("POSTCOMMENT URL", `${URL}/recipes/${recipeId}/comments`);
    console.log(comment);
    try {
      const response = await axios.post(
        `${URL}/recipes/${recipeId}/comments`,
        comment
      );

      if (response.status === 200) {
        console.log("PostComment RESPONSE DATA", response.data);
        console.log("postComment RESPONSE STATUS", response.status);
        set((state) => ({
          comments: [...state.comments, response.data],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  },

  fetchComments: async (URL: string, recipeId: string) => {
    try {
      const response = await axios.get(`${URL}/recipes/${recipeId}/comments`);

      if (response.status === 200) {
        console.log("FetchComments successfull", response.data);

        set(() => ({
          comments: response.data,
        }));
      }
    } catch (error) {
      console.log("FETCH COMMENT CATCH", error);
    }
  },
}));

export default CommentsGlobalState;
