import { Routes, Route } from "react-router-dom";
import BeveragePage from "../../Beverages/BeveragePage";
import BeverageCardPage from "../../Beverages/BeverageCardPage";
import DetailedBeverageCardPage from "../../Beverages/DetailedBeverageCardPage";

const BeverageRoutes = () => {
  return (
    <Routes>
      <Route path="/:category/:id" element={<DetailedBeverageCardPage />} />
      <Route path="/:category" element={<BeverageCardPage />} />
      <Route path="/" element={<BeveragePage />} />
    </Routes>
  );
};

export default BeverageRoutes;
