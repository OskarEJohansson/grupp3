import { Routes, Route } from 'react-router-dom';
import CategoryPage from '../../Food/CategoryPage';
import MealPage from '../../Food/MealPage';
import DetailedMealPage from '../../Food/DetailedMealPage';

const FoodRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryPage />} />
      <Route path="/:category" element={<MealPage />} />
      <Route path="/detailed-meal-page" element={<DetailedMealPage />} />
    </Routes>
  );
};

export default FoodRoutes;
