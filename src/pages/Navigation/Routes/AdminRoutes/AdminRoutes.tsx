import { Route, Routes } from "react-router-dom";
import FoodRoutes from "../FoodRoutes/FoodRoutes";
import ContactForm from "../../../Contact/components/ContactForm";
import AboutUs from "../../AboutUs";
import HomePage from "../../../Home/Homepage";
import BeverageRoutes from "../DrinkRoutes/DrinkRoutes";
import AdminPage from "../../../Admin/AdminPage";
import AddRecipePage from "../../../Admin/AddRecipePage";
import AdminAllRecipes from "../../../Admin/AdminAllRecipes";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category-page/*" element={<FoodRoutes />} />
      <Route path="/beverage-page/*" element={<BeverageRoutes />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/add-recipe" element={<AddRecipePage />} />
      <Route path="/all-recipes" element={<AdminAllRecipes />} />
      <Route path="/contact-form" element={<ContactForm />} />
    </Routes>
  );
};

export default AdminRoutes;
