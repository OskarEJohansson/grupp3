import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import ContactFormPage from "./pages/ContactFormPage";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import BeveragePage from "./pages/BeveragePage";
import FoodPage from "./pages/FoodPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import UseGlobalState from "./components/GlobalState";
import Category from "./components/Category";

function App() {
  const category = UseGlobalState((set) => set.globalFoodCategory);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beverage-page" element={<BeveragePage />} />
        <Route path="/contact-form" element={<ContactFormPage />} />
        <Route path="/food-page" element={<FoodPage />} />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path={`/${category}`} element={<Category />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
