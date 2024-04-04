import React from "react";
import { useComments } from "../pages/CommentsGlobalState";

interface Props {
  articleId: string;
}

const CommentList: React.FC<Props> = () => {
  const { comments } = useComments();

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
