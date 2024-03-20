// UserRoutes.js
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../LoginPage';
import CartPage from '../../CartPage';
import AboutUs from '../../AboutUs';
import HomePage from '../../Homepage';
import AddFoodItemPage from '../../AddFoodItemPage';
import CommentsPage from '../../CommentsPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/add-food-item-page" element={<AddFoodItemPage />} />
      <Route path="/add-comments-page" element={<CommentsPage />} />
    </Routes>
  );
};

export default UserRoutes;
