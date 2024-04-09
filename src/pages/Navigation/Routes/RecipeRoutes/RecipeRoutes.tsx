import { Routes, Route } from "react-router-dom";
import UpdateRecipePage from "../../../Update/UpdateRecipePage";
import RecipeCategoryPage from "../../../Recipe/RecipeCategoryPage";
import RecipePage from "../../../Recipe/RecipePage";
import CommentsPage from "../../../Comments/CommentsPage";

const RecipeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RecipeCategoryPage />} />
      <Route path="/:category" element={<RecipePage />} />
      <Route path="/update-food" element={<UpdateRecipePage />} />
      <Route path="/comments" element={<CommentsPage />} />
    </Routes>
  );
};

export default RecipeRoutes;
