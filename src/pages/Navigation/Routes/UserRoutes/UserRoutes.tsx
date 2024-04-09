import { Routes, Route } from "react-router-dom";
import CartPage from "../../../Cart/CartPage";
import AboutUs from "../../AboutUs";
import HomePage from "../../../Home/Homepage";
import AdminPage from "../../../Admin/AdminAddRecipePage";
import ContactFormPage from "../../../Contact/ContactFormPage";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/contact-form" element={<ContactFormPage />} />
    </Routes>
  );
};

export default UserRoutes;
