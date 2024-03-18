import { useNavigate } from "react-router-dom";
import Category from "../../components/Food/Category";

const MealPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Category />
      <button onClick={() => navigate(`/food-page`)}>Back</button>
    </div>
  );
};

export default MealPage;
