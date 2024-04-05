import { create } from "zustand";
import axios from "axios";
import { CommentTypes } from "../../../types";

export interface CommentsGlobalStateInterface {
  comment: any;
  comments: CommentTypes[];
  URL: string;
  setComment: (newComment: CommentTypes) => void;
  postComment: (URL: string, recipeId: string) => void;
  fetchComments: (url: string, recipeId: string) => void;
}

const CommentsGlobalState = create<CommentsGlobalStateInterface>((set) => ({
  comment: {},
  comments: [],
  URL: "https://sti-java-grupp3-mzba2l.reky.se",

  setComment: (newComment: any) => {
    set(() => ({
      comment: newComment,
    }));
  },

  postComment: async (URL: string, recipeId: string) => {
    try {
      const response = await axios.post(`${URL}/recipes/${recipeId}/comments`);

      if (response.status === 200) {
        console.log("PostComment RESPONSE DATA", response.data);
        console.log("postComment RESPONSE STATUS", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  },

  fetchComments: async (URL: string, recipeId: string) => {
    try {
      const response = await axios.get(`${URL}/recipes/${recipeId}/comments`);

      if (response.status === 200) {
        console.log("FetchComments successfull", response.status);
        console.log("FetchComments DATA", response.data);

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
