import RecipeGlobalState from "../Food/utils/RecipeGlobalState";
import CommentsCard from "./components/CommentsCard";

const CommentsPage = () => {
  const { article } = RecipeGlobalState();
  return (
    <div>
      <CommentsCard recipe={article} />
    </div>
  );
};

export default CommentsPage;
