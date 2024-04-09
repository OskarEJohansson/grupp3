import { Routes, Route } from "react-router-dom";
import CartPage from "../../../Cart/CartPage";
import AboutUs from "../../AboutUs";
import HomePage from "../../../Home/Homepage";
import ContactFormPage from "../../../Contact/ContactFormPage";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/contact-form" element={<ContactFormPage />} />
    </Routes>
  );
};

export default UserRoutes;
