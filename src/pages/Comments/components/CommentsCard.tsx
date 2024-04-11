import { useEffect } from "react";
import { CommentTypes, RecipeTypes } from "../../../types";
import CommentsGlobalState from "../utils/CommentsGlobalState";
import RatingGlobalState from "../../Rating/utils/RatingGlobalState";

const CommentsCard = ({ id }: { id: string }) => {
  const { comments, fetchComments, URL } = CommentsGlobalState();
  const { averageRating, fetchAverageRating } = RatingGlobalState();
  const article = CommentsGlobalState((state) => state.article) as RecipeTypes;

  useEffect(() => {
    fetchComments(URL, id);
    fetchAverageRating(id);
  }, [id]);

  return (
    <div>
      <div>{article.title}</div>
      <img src={article.imageUrl} alt="" width={300} />
      <div>{article.description}</div>
      <div>AVG RATING: {averageRating !== 0 ? averageRating : "Loading..."}</div>

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
