
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../LoginPage';
import CartPage from '../../CartPage';
import AboutUs from '../../AboutUs';
import HomePage from '../../Home/Homepage';
import AddFoodItemPage from '../../AddFoodItemPage';
import CommentsPage from '../../CommentsPage';
import ContactForm from '../../../components/ContactForm';
import RatingPage from '../../RatingPage';
import AdminPage from "../../Admin/AdminPage";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/admin-page" element={<AdminPage />} />
      <Route path="/add-food-item-page" element={<AddFoodItemPage />} />
      <Route path="/add-comments-page" element={<CommentsPage />} />
      <Route path="/contact-form" element={<ContactForm />} />
      <Route path="/rating-page" element={<RatingPage />} />
    </Routes>
  );
};

export default UserRoutes;
