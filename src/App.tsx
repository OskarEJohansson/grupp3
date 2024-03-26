import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import BeverageRoutes from "./pages/Routes/BeverageRoutes/BeverageRoutes";
import UserRoutes from "./pages/Routes/UserRoutes/UserRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/beverage-page/*" element={<BeverageRoutes />} />
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
