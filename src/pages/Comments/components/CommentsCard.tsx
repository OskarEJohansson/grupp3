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
    <div className=" p-4 border rounded-lg bg-gray-100 flex flex-col">
      <div className="flex items-start">
        <div className="mr-4">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="rounded-lg mb-4"
            width={300}
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
          <p className="mb-4">{article.description}</p>
          {comments.map((comment: CommentTypes, index: number) => (
            <div key={index} className="border-t border-gray-300 pt-2">
              <div className="font-semibold">{comment.name}</div>
              <div>{comment.comment}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-blue-500 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center">
        {averageRating !== null && averageRating !== undefined ? Number(averageRating).toFixed(1) : "1"}
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
