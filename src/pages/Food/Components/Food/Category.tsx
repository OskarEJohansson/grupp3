import { useNavigate } from "react-router-dom";
import { CategoryTypes } from "../../../../types";
import "../../../../App.css";
import FoodGlobalState from "../../Utilities/FoodGlobalState";

interface CategoryInterface {
  CategoryProps: CategoryTypes;
}
const Category = ({ CategoryProps }: CategoryInterface) => {
  const navigate = useNavigate();
  const { setCategory } = FoodGlobalState();

  const handleOnClick = () => {
    navigate(`${CategoryProps.category} `);
    setCategory(CategoryProps.category);
  };

  return (
    <div className="category-item">
      <p>{CategoryProps.category}</p>
      <img
        src={CategoryProps.picture}
        alt={CategoryProps.description}
        style={{ maxWidth: "300px" }}
        onClick={handleOnClick}
      />
    </div>
  );
};

export default Category;
