import { useNavigate } from "react-router-dom";
import { CategoryTypes } from "../../../types";
import "../../../App.css";
import RecipeGlobalState from "../utils/RecipeGlobalState";

interface RecipeCategoryInterface {
  RecipeCategoryProps: CategoryTypes;
}
const RecipeCategory = ({ RecipeCategoryProps }: RecipeCategoryInterface) => {
  const navigate = useNavigate();
  const { setCategory } = RecipeGlobalState();

  const handleOnClick = () => {
    navigate(`${RecipeCategoryProps.category} `);
    setCategory(RecipeCategoryProps.category);
  };

  return (
    <div className="category-item">
      <p>{RecipeCategoryProps.category}</p>
      <img
        src={RecipeCategoryProps.picture}
        alt={RecipeCategoryProps.description}
        style={{ maxWidth: "300px" }}
        onClick={handleOnClick}
      />
      {RecipeCategoryProps.allergen && (
        <img
          src={RecipeCategoryProps.allergenPicture}
          alt={RecipeCategoryProps.allergen}
          className="category-allergen-icon"
        />
      )}
    </div>
  );
};

export default RecipeCategory;
