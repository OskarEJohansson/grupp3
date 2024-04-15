import { useNavigate } from "react-router-dom";
import RecipeGlobalState from "../Recipe/utils/RecipeGlobalState";
import CommentsAddCommentCard from "./components/CommentsAddCommentCard";
import CommentsCard from "./components/CommentsCard";
import CommentsGlobalState from "./utils/CommentsGlobalState";
import RatingPage from "../Rating/RatingPage";

const CommentsPage = () => {
  const { recipeId } = CommentsGlobalState();
  const { category } = RecipeGlobalState();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <div>
        <CommentsCard id={recipeId} />
      </div>
      <div className="mb-8">
        <RatingPage />
      </div>
      <div className="mb-8">
        <CommentsAddCommentCard id={recipeId} />
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => navigate(`/recipe-page/${category}`)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CommentsPage;
