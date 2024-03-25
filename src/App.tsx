import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import FoodRoutes from "./pages/Routes/FoodRoutes/FoodRoutes";
import BeverageRoutes from "./pages/Routes/BeverageRoutes/BeverageRoutes";
import UserRoutes from "./pages/Routes/UserRoutes/UserRoutes";
import AdminRoutes from "./pages/Routes/AdminRoutes/AdminRoutes";
import Footer from "./components/Footer";

function App() {
  const [isAdminView, setIsAdminView] = useState(false);

  const toggleAdminView = () => {
    setIsAdminView(!isAdminView);
  };

  return (
    <BrowserRouter>
      <Navbar toggleAdminView={toggleAdminView} isAdminView={isAdminView} />
      <Routes>
        {isAdminView ? (
          <Route
            path="/*"
            element={
              <AdminRoutes isAdminView={isAdminView} />
            }
          />
        ) : (
          <>
            <Route path="/category-page/*" element={<FoodRoutes />} />
            <Route path="/beverage-page/*" element={<BeverageRoutes />} />
            <Route path="/*" element={<UserRoutes />} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
