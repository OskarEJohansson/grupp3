import React from "react";
import { useParams } from "react-router-dom";
import CommentBox from "../components/CommentBox";
import CommentList from "../components/CommentList";
import { CommentsProvider } from "./CommentsGlobalState";

const CommentsPage = () => {
  const { articleId } = useParams<{ articleId: string }>();

  const handleSubmit = (name: string, comment: string) => {
    console.log("Comment submitted:", name, comment);
  };

  return (
    <CommentsProvider>
      <CommentBox onSubmit={handleSubmit} />
      {articleId && <CommentList articleId={articleId} />}
    </CommentsProvider>
  );
};

export default CommentsPage;