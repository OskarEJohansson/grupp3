import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactFormPage from "./pages/ContactFormPage";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import BeveragePage from "./pages/BeveragePage";
import CategoryPage from "./pages/Food/CategoryPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import UseGlobalState from "./components/GlobalState";
import AddFoodItemPage from "./pages/AddFoodItemPage";
import CommentsPage from "./pages/CommentsPage";
import DetailedCard from "./components/Food/DetaildCard";
import MealPage from "./pages/Food/MealPage";

function App() {
  const category = UseGlobalState((state) => state.globalCategory);
  const globalArticleId = UseGlobalState((state) => state.globalArticleId);
  const globalArticle = UseGlobalState((state) => state.globalArticle);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beverage-page" element={<BeveragePage />} />
        <Route path="/contact-form" element={<ContactFormPage />} />
        <Route path="/food-page" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path={`/${globalArticleId}`}
          element={<DetailedCard article={globalArticle} />}
        />
        <Route path={`/${category}`} element={<MealPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/add-food-item-page" element={<AddFoodItemPage />} />
        <Route path="/add-comments-page" element={<CommentsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
