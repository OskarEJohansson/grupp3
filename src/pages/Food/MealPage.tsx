import { useNavigate } from "react-router-dom";
import Meal from "./Components/Food/Meal";

const MealPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Meal />
      <button
        className="back-button"
        onClick={() => navigate(`/category-page`)}
      >
        Back
      </button>
    </div>
  );
};

export default MealPage;
