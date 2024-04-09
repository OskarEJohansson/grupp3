import { useNavigate } from "react-router-dom";
import RecipeGlobalState from "../utils/RecipeGlobalState";
import { CategoryTypes } from "../../../types";

const RecipeCategory = ({ RecipeCategoryProps }: { RecipeCategoryProps: CategoryTypes }) => {
  const navigate = useNavigate();
  const { setCategory } = RecipeGlobalState();

  const handleOnClick = () => {
    navigate(`${RecipeCategoryProps.category}`);
    setCategory(RecipeCategoryProps.category);
  };

  return (
    <div className="flex justify-center items-center gap-8">
      <div className="category-item relative">
        <div className="category-card relative">
          <img
            src={RecipeCategoryProps.picture}
            alt={RecipeCategoryProps.description}
            className="category-image cursor-pointer w-72 h-72 object-cover border-4 border-black rounded-full transition-transform transform hover:scale-110"
            onClick={handleOnClick}
          />
          <div className="absolute bottom-0 right-0 p-2 text-center bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 transition duration-300 ease-in-out text-xs">
            {RecipeCategoryProps.category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCategory;
