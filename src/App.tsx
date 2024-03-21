import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import FoodRoutes from "./pages/Routes/FoodRoutes/FoodRoutes";
import BeverageRoutes from "./pages/Routes/BeverageRoutes/BeverageRoutes";
import UserRoutes from "./pages/Routes/UserRoutes/UserRoutes";
import Footer from "./components/Footer";
import CommentsPage from "./pages/CommentsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/category-page/*" element={<FoodRoutes />} />
        <Route path="/beverage-page/*" element={<BeverageRoutes />} />
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/comments" element={<CommentsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
