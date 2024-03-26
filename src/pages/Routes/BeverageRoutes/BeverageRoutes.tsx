import { Routes, Route } from "react-router-dom";
import BeveragePage from "../../Beverages/BeveragePage";
import BeverageCardPage from "../../Beverages/BeverageCardPage";
import DetailedBeverageCardPage from "../../Beverages/DetailedBeverageCardPage";

const BeverageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BeveragePage />} />
      <Route path="/bev" element={<BeverageCardPage />} />
      <Route path="/id" element={<DetailedBeverageCardPage />} />
    </Routes>
  );
};

export default BeverageRoutes;
