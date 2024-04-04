import { useNavigate } from "react-router-dom";
import Category from "./components/RecipeCategory";
import { foodCategoryList } from "../../assets/foodCategoryList";
import "../../App.css";

const RecipeCategoryPage = () => {
  const categoryList = foodCategoryList;
  const navigate = useNavigate();

  return (
    <div className="category-container">
      <h1 className="category-heading">FOOD CATEGORIES</h1>
      <div className="category-content">
        {categoryList.map((recipeCategory) => (
          <Category
            key={recipeCategory._id}
            RecipeCategoryProps={recipeCategory}
          />
        ))}
      </div>
      <button className="back-button" onClick={() => navigate(`/`)}>
        Back
      </button>
    </div>
  );
};

export default RecipeCategoryPage;
