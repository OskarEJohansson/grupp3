import { Routes, Route } from "react-router-dom";
import CartPage from "../../../Cart/CartPage";
import AboutUs from "../../AboutUs";
import HomePage from "../../../Home/Homepage";

import ContactForm from "../../../Contact/components/ContactForm";
import AdminPage from "../../../Admin/AdminPage";
import AddRecipePage from "../../../Admin/AddRecipePage";
import AdminAllRecipes from "../../../Admin/AdminAllRecipes";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/add-recipe" element={<AddRecipePage />} />
      <Route path="/contact-form" element={<ContactForm />} />
      <Route path="/all-recipes" element={<AdminAllRecipes />} />
    </Routes>
  );
};

export default UserRoutes;
