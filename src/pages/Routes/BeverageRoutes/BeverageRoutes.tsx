import { Routes, Route } from 'react-router-dom';
import BeveragePage from '../../BeveragePage';

const BeverageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BeveragePage />} />
    </Routes>
  );
};

export default BeverageRoutes;
