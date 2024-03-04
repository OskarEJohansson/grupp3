import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import ContactFormPage from './pages/ContactFormPage';
import CarouselPage from './pages/CarouselPage';
import './App.css';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <h1 className="homepage-header">Grupp 3</h1>
      <Navbar />
      <CarouselPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-form" element={<ContactFormPage />} />
      </Routes>
    </>
  );
}

export default App;
