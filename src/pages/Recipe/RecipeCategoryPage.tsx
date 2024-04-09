import { useNavigate } from "react-router-dom";
import RecipeCategory from "./components/RecipeCategory";
import { foodCategoryList } from "../../assets/foodCategoryList";
import { FaUtensils } from "react-icons/fa";

const RecipeCategoryPage = () => {
  const categoryList = foodCategoryList;
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-r from-bg-gradient-start to-bg-gradient-end font-serif relative">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md text-left text-gray-800 font-sans antialiased mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-black">Discover Delicious Foods From All Over The World</h1>
        <p className="text-lg text-center text-gray-700 mb-6">Every meal is carefully chosen to match the desires of our users.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {categoryList.map((recipeCategory) => (
          <RecipeCategory
            key={recipeCategory._id}
            RecipeCategoryProps={recipeCategory}
          />
        ))}
      </div>
      <section className="bg-gray-100 py-12 px-4 text-center mt-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Elevate Your Culinary Experience</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">Explore our diverse selection of mouthwatering recipes, each crafted with passion and precision. From appetizers to desserts, there's something for every occasion and craving.</p>
      </section>
      <div className="flex flex-col items-center mt-6">
        <div className="flex items-center">
          <FaUtensils className="text-3xl text-gray-700 mr-2" />
          <p className="text-base md:text-lg text-gray-700"><span className="text-cursive text-red-600 pt-10">Remember to eat responsibly.</span></p>
        </div>
        <button
          className="mt-8 bg-yellow-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out text-sm self-center"
          onClick={() => navigate(`/`)}
        >
          Back
        </button>
      </div>
    </section>
  );
};

export default RecipeCategoryPage;
