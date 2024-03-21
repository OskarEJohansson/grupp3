import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactFormPage from "./pages/ContactFormPage";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import BeveragePage from "./pages/Beverages/BeveragePage";
import CategoryPage from "./pages/Food/CategoryPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import AddFoodItemPage from "./pages/AddFoodItemPage";
import CommentsPage from "./pages/CommentsPage";

import MealPage from "./pages/Food/MealPage";
import DetailedMealPage from "./pages/Food/DetailedMealPage";
import BeverageCardPage from "./pages/Beverages/BeverageCardPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beverage-page" element={<BeveragePage />} />
        <Route path="/contact-form" element={<ContactFormPage />} />
        <Route path="/food-page" element={<CategoryPage />} />
        <Route path="/category" element={<MealPage />} />
        <Route path="/detailedmealpage" element={<DetailedMealPage />} />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/add-food-item-page" element={<AddFoodItemPage />} />
        <Route path="/add-comments-page" element={<CommentsPage />} />
        <Route path="/drink" element={<BeverageCardPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
