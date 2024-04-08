import { useEffect } from "react";
import { CommentTypes, RecipeTypes } from "../../../types";
import CommentsGlobalState from "../utils/CommentsGlobalState";

const CommentsCard = ({ id }: { id: string }) => {
  const { comments, fetchComments, URL } = CommentsGlobalState();
  const article = CommentsGlobalState((state) => state.article) as RecipeTypes;

  useEffect(() => {
    fetchComments(URL, id);
  }, [id]);

  return (
    <div>
      <div>{article.title}</div>
      <img src={article.imageUrl} alt="" width={300} />
      <div>{article.description}</div>

      {comments.map((comment: CommentTypes, index: number) => (
        <div key={index}>
          <div>NAME: {comment.name} </div>
          <div>COMMENT: {comment.comment} </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsCard;
