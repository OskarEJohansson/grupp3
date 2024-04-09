import { useNavigate } from "react-router-dom";
import DrinkCard from "./components/DrinkCard";

const DrinkCardPage = () => {

  const navigate = useNavigate();

  return (
    <div>
       <div className="min-h-screen bg-gradient-to-r from-bg-gradient-start to-bg-gradient-end font-serif relative">
      <div className="flex flex-col justify-center items-center px-4 py-12 md:px-8 relative z-10">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-left text-gray-800 font-sans antialiased mb-8">
          <h1 className="text-4xl font-bold mb-4 text-center text-black">Discover Delicious Drinks</h1>
          <p className="text-lg text-center text-gray-700 mb-6">Hopefully you find something desirable. There is something for every taste bud! </p>
        </div>
        <DrinkCard />
        <button
          className="mt-8 bg-yellow-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out text-sm self-center"
          onClick={() => navigate(`/drink-page`)}
        >
          Back
        </button>
      </div>
    </div>
    </div>
  );
};

export default DrinkCardPage;
