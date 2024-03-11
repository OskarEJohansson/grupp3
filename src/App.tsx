import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Food from "./components/Food";
import Meat from "./components/Meat";
import Navbar from "./components/Navbar";
import Veg from "./components/Veg";
import AboutUs from "./pages/AboutUs";
import ContactFormPage from "./pages/ContactFormPage";
import HomePage from "./pages/Homepage";
import Footer from "./components/Footer";
import Beverages from "./components/Beverages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/contact-form" element={<ContactFormPage />} />
        <Route path="/food" element={<Food />} />
        <Route path="/food/meat" element={<Meat />} />
        <Route path="/food/veg" element={<Veg />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
