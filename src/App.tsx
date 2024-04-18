import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Navigation/components/Navbar";
import RecipeRoutes from "./pages/Navigation/Routes/RecipeRoutes/RecipeRoutes";
import DrinkRoutes from "./pages/Navigation/Routes/DrinkRoutes/DrinkRoutes";
import UserRoutes from "./pages/Navigation/Routes/UserRoutes/UserRoutes";
import Footer from "./pages/Navigation/components/Footer";
import SearchResultsPage from "./pages/Navigation/Searchbar/SearchResultsPage";
import AdminRoutes from "./pages/Navigation/Routes/AdminRoutes/AdminRoutes";
import CheckoutPage from "./pages/Cart/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="pb-20">
        <Navbar />
      </div>
      <Routes>
        <>
          <Route path="/search-result" element={<SearchResultsPage />} />
          <Route path="/checkoutpage" element={<CheckoutPage />} />
          <Route path="/recipe-page/*" element={<RecipeRoutes />} />
          <Route path="/drink-page/*" element={<DrinkRoutes />} />
          <Route path="/*" element={<UserRoutes />} />
          <Route path="/admin-page/*" element={<AdminRoutes />} />
        </>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
