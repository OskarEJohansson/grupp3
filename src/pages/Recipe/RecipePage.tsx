import { useNavigate } from "react-router-dom";
import Recipe from "./components/Recipe";

const RecipePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Recipe />
      <button
        className="back-button"
        onClick={() => navigate(`/category-page`)}
      >
        Back
      </button>
    </div>
  );
};

export default RecipePage;
