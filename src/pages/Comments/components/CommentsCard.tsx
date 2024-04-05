import { useEffect } from "react";
import { CommentTypes } from "../../../types";
import CommentsGlobalState from "../utils/CommentsGlobalState";

const CommentsCard = (recipe: any) => {
  const { comments, fetchComments, URL } = CommentsGlobalState();

  useEffect(() => {
    fetchComments(URL, recipe._id);
  }, [recipe]);

  return (
    <div>
      {comments.map((comment: CommentTypes) => (
        <div key={comment._id}>
          <div>NAME: {comment.name} </div>
          <div>COMMENT: {comment.name} </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsCard;
