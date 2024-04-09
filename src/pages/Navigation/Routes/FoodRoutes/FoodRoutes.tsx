import { Routes, Route } from "react-router-dom";
import CategoryPage from "../../../Food/RecipeCategoryPage";
import RecipePage from "../../../Food/RecipePage";
import UpdateRecipePage from "../../../Update/UpdateRecipePage";

const FoodRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryPage />} />
      <Route path="/:category" element={<RecipePage />} />
      <Route path="/update-food" element={<UpdateRecipePage />} />
    </Routes>
  );
};

export default FoodRoutes;
