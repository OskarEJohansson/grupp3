import { Route, Routes } from "react-router-dom";
import FoodRoutes from "../FoodRoutes/FoodRoutes";
import ContactForm from "../../../components/ContactForm";
import AboutUs from "../../AboutUs";
import AddFoodItemPage from "../../AddFoodItemPage";
import AdminPage from "../../Admin/AdminPage";
import CommentsPage from "../../CommentsPage";
import HomePage from "../../Home/Homepage";
import RatingPage from "../../RatingPage";
import BeverageRoutes from "../BeverageRoutes/BeverageRoutes";


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category-page/*" element={<FoodRoutes />} />
      <Route path="/beverage-page/*" element={<BeverageRoutes />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/add-food-item-page" element={<AddFoodItemPage />} />
      <Route path="/add-comments-page" element={<CommentsPage />} />
      <Route path="/contact-form" element={<ContactForm />} />
      <Route path="/rating-page" element={<RatingPage />} />
      
    </Routes>
  );
};

export default AdminRoutes;
