import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navigation/components/Navbar";
import FoodRoutes from "./pages/Navigation/Routes/FoodRoutes/FoodRoutes";
import DrinkRoutes from "./pages/Navigation/Routes/DrinkRoutes/DrinkRoutes";
import UserRoutes from "./pages/Navigation/Routes/UserRoutes/UserRoutes";
import Footer from "./pages/Navigation/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <>
          <Route path="/category-page/*" element={<FoodRoutes />} />
          <Route path="/drink-page/*" element={<DrinkRoutes />} />
          <Route path="/*" element={<UserRoutes />} />
        </>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
