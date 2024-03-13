import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Meat from "./components/Meat";
import Navbar from "./components/Navbar";
import Veg from "./components/Veg";
import AboutUs from "./pages/AboutUs";
import ContactFormPage from "./pages/ContactFormPage";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import BeveragePage from "./pages/BeveragePage";
import FoodPage from "./pages/FoodPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";

function App() {
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
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
