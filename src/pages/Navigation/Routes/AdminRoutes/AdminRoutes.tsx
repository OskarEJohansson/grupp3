import { Route, Routes } from "react-router-dom";
import FoodRoutes from "../RecipeRoutes/RecipeRoutes";
import AboutUs from "../../AboutUs";
import AdminPage from "../../../Admin/AdminPage";
import HomePage from "../../../Home/Homepage";
import BeverageRoutes from "../DrinkRoutes/DrinkRoutes";
import ContactFormPage from "../../../Contact/ContactFormPage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category-page/*" element={<FoodRoutes />} />
      <Route path="/beverage-page/*" element={<BeverageRoutes />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/contact-form" element={<ContactFormPage />} />
    </Routes>
  );
};

export default AdminRoutes;
