import { Route, Routes } from "react-router-dom";
import RecipeRoutes from "../RecipeRoutes/RecipeRoutes";
import AboutUs from "../../AboutUs";
import AdminPage from "../../../Admin/AdminPage";
import AdminAddRecipePage from "../../../Admin/AdminAddRecipePage";
import AdminAllRecipesPage from "../../../Admin/AdminAllRecipesPage";
import HomePage from "../../../Home/Homepage";
import BeverageRoutes from "../DrinkRoutes/DrinkRoutes";
import ContactFormPage from "../../../Contact/ContactFormPage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPage />} />
      <Route path="/add-recipe" element={<AdminAddRecipePage />} />
      <Route path="/all-recipes" element={<AdminAllRecipesPage />} />
      <Route path="/category-page/*" element={<RecipeRoutes />} />
      <Route path="/beverage-page/*" element={<BeverageRoutes />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/contact-form" element={<ContactFormPage />} />
    </Routes>
  );
};

export default AdminRoutes;
