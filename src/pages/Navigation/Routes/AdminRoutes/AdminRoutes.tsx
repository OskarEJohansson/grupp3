import { Route, Routes } from "react-router-dom";
import AboutUs from "../../AboutUs";
import AdminPage from "../../../Admin/AdminPage";
import HomePage from "../../../Home/Homepage";
import DrinkRoutes from "../DrinkRoutes/DrinkRoutes";
import ContactFormPage from "../../../Contact/ContactFormPage";
import AdminAddRecipePage from "../../../Admin/AdminAddRecipePage";
import AdminCategoryCard from "../../../Admin/components/AdminCategoryCard";
import AdminAllRecipesPage from "../../../Admin/AdminAllRecipesPage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPage />} />
      <Route path="/add-recipe" element={<AdminAddRecipePage />} />
      <Route path="/all-recipes" element={<AdminAllRecipesPage />} />
      <Route path="/see-categories" element={<AdminCategoryCard />} />
      <Route path="/drink-page/*" element={<DrinkRoutes />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/contact-form" element={<ContactFormPage />} />
    </Routes>
  );
};

export default AdminRoutes;
