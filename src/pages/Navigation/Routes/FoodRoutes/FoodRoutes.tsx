import { Routes, Route } from "react-router-dom";
import CategoryPage from "../../../Food/RecipeCategoryPage";
import MealPage from "../../../Food/RecipePage";
import UpdateFoodPage from "../../../Update/UpdateFoodPage";

const FoodRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryPage />} />
      <Route path="/:category" element={<MealPage />} />
      <Route path="/update-food" element={<UpdateFoodPage />} />
    </Routes>
  );
};

export default FoodRoutes;
