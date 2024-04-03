import { Routes, Route } from "react-router-dom";
import CategoryPage from "../../../Food/CategoryPage";
import MealPage from "../../../Food/MealPage";

const FoodRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryPage />} />
      <Route path="/:category" element={<MealPage />} />
    </Routes>
  );
};

export default FoodRoutes;
