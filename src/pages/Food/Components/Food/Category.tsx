import { useNavigate } from "react-router-dom";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";
import { CategoryTypes } from "../../../../types";
import "../../../../App.css";

interface CategoryInterface {
  CategoryProps: CategoryTypes;
}
const Category = ({ CategoryProps }: CategoryInterface) => {
  const navigate = useNavigate();
  const { setCategory, setGlobalCategoryData, URL } = GlobalState();

  const handleOnClick = () => {
    navigate(`${CategoryProps.category} `);
    setCategory(CategoryProps.category);
    setGlobalCategoryData(URL, CategoryProps.category);
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
