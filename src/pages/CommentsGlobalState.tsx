import React, { createContext, useContext, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface Comment {
  name: string;
  comment: string;
}

interface CommentsGlobalState {
  comments: Comment[];
  fetchComments: (id: string) => Promise<void>;
  handleSubmit: (articleId: string, name: string, comment: string) => Promise<void>;
}

const CommentsGlobalContext = createContext<CommentsGlobalState | undefined>(undefined);

export const CommentsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async (id: string) => {
    try {
      const response: AxiosResponse<Comment[]> = await axios.get(`https://sti-java-grupp3-mzba2l.reky.se/recipes/${id}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('Failed to fetch comments', error);
      throw error;
    }
  };

  const handleSubmit = async (articleId: string, comment: string) => {
    try {
      await axios.post(`https://sti-java-grupp3-mzba2l.reky.se/recipes/${articleId}/comments`, {
        comment
      });
    } catch (error) {
      console.error('Failed to submit comment', error);
      throw error;
    }
  };

  return (
    <CommentsGlobalContext.Provider value={{ comments, fetchComments, handleSubmit }}>
      {children}
    </CommentsGlobalContext.Provider>
  );
};

export const useComments = () => {
  const context = useContext(CommentsGlobalContext);
  if (!context) {
    throw new Error('useComments must be used within a CommentsProvider');
  }
  return context;
};
