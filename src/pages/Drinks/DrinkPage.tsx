import { useNavigate } from "react-router-dom";
import DrinkCategory from "./components/DrinkCategory";
import { FaCocktail } from 'react-icons/fa';

const DrinkPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-r from-bg-gradient-start to-bg-gradient-end font-serif relative">
      <div className="">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-left text-gray-800 font-sans antialiased mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-black">Discover Delicious Drinks From All Over The World</h1>
          <p className="text-lg text-center text-gray-700 mb-6">Every drink is carefully chosen to match the desires of our users.</p>
        </div>
        <DrinkCategory />
        <section className="bg-gray-100 py-12 px-4 text-center mt-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Elevate Your Beverage Experience</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6">Explore our diverse selection of handcrafted drinks, each bursting with flavor and crafted to perfection. From refreshing cocktails to soothing mocktails, there's something for every palate.</p>
        </section>
        <div className="flex justify-center items-center mt-6">
          <FaCocktail className="text-3xl text-gray-700 mr-2" />
          <p className="text-base md:text-lg text-gray-700"><span className="text-cursive text-red-600 pt-10">Remember to drink responsibly.</span></p>
        </div>
        <div className="flex justify-center"> 
          <button
            className="mt-8 bg-yellow-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out text-sm"
            onClick={() => navigate(`/`)}
          >
            Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default DrinkPage;
