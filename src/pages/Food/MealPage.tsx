import { useNavigate } from "react-router-dom";
import Category from "./Components/Food/Meal";

const MealPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Category />
      <button onClick={() => navigate(`/category-page`)}>Back</button>
    </div>
  );
};

export default MealPage;
