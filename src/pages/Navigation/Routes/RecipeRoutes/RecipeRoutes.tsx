import { Routes, Route } from "react-router-dom";
import CategoryPage from "../../../Food/RecipeCategoryPage";
import RecipePage from "../../../Food/RecipePage";
import UpdateRecipePage from "../../../Update/UpdateRecipePage";
import MealPage from "../../../Food/RecipePage";
import UpdateFoodPage from "../../../Update/UpdateRecipePage";
import CommentsPageOskar from "../../../Comments/CommentsPage";

const RecipeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryPage />} />
      <Route path="/:category" element={<RecipePage />} />
      <Route path="/update-food" element={<UpdateRecipePage />} />
      <Route path="/:category" element={<MealPage />} />
      <Route path="/update-food" element={<UpdateFoodPage />} />
      <Route path="/comments" element={<CommentsPageOskar />} />
    </Routes>
  );
};

export default RecipeRoutes;
