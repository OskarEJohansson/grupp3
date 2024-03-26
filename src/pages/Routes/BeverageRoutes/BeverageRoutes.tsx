import { Routes, Route } from "react-router-dom";
import BeveragePage from "../../Beverages/BeveragePage";
import BeverageCardPage from "../../Beverages/BeverageCardPage";

const BeverageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BeveragePage />} />
      <Route path="/beverage" element={<BeverageCardPage />} />
    </Routes>
  );
};

export default BeverageRoutes;
