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
    <div>
      <CommentsCard id={recipeId} />
      <RatingPage />
      <CommentsAddCommentCard id={recipeId} />

      <button onClick={() => navigate(`/category-page/${category}`)}>
        Back
      </button>
    </div>
  );
};

export default CommentsPage;
