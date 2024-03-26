import { Routes, Route } from "react-router-dom";
import HomePage from "../../Home/Homepage";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default UserRoutes;
