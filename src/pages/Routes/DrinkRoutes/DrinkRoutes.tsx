import { Routes, Route } from "react-router-dom";
import DrinkPage from "../../Drinks/DrinkPage";
import DrinkCardPage from "../../Drinks/DrinkCardPage";

const DrinkRoutes = () => {
  return (
    <Routes>
      <Route path="/:category" element={<DrinkCardPage />} />
      <Route path="/" element={<DrinkPage />} />
    </Routes>
  );
};

export default DrinkRoutes;
