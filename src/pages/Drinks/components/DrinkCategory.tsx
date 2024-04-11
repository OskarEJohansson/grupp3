/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import AlcoholicImage from "../../../assets/images/alcoholic.jpeg";
import NonAlcoholicImage from "../../../assets/images/nonAlcoholic.jpeg";

const DrinkCategory = () => {
  const categories = ["Alcoholic", "Non Alcoholic"];
  const navigate = useNavigate();

  const handleCategoryClick = (category: any) => {
    navigate(`/drink-page/${category}`);
  };

  return (
<<<<<<< HEAD
    <div className="flex justify-center items-center gap-8">
      {categories.map((category, index) => (
        <div key={index} className="category-item relative">
          <div className="category-card relative">
            <img
              src={category === "Alcoholic" ? AlcoholicImage : NonAlcoholicImage}
              alt={category}
              className="category-image cursor-pointer w-72 h-72 object-cover border-4 border-black rounded-full transition-transform transform hover:scale-110"
              onClick={() => handleCategoryClick(category)}
            />
            <div className="absolute bottom-0 right-0 p-2 text-center bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 transition duration-300 ease-in-out text-xs">
              {category}
            </div>
          </div>
=======
    <div className="drink-category-container">
<<<<<<< HEAD
=======
      <h1>Drinks</h1>
>>>>>>> a89725dd9a986280e6fec112b40162ba0de420a5
      {categories.map((category, index: number) => (
        <div key={index}>
          <DrinkButton category={category} />
>>>>>>> f56aec646aed03dd4fcef800c47bd30232f5a7c5
        </div>
      ))}
    </div>
  );
};

export default DrinkCategory;
