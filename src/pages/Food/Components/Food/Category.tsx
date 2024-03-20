import { useNavigate } from "react-router-dom";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";
import { CategoryTypes } from "../../../../types";

interface CategoryInterface {
  CategoryProps: CategoryTypes;
}
const Category = ({ CategoryProps }: CategoryInterface) => {
  const navigate = useNavigate();
  const globalState = GlobalState<GlobalStateInterface>((state) => state);

  const handleOnClick = () => {
    navigate(`${CategoryProps.category} `);
    globalState.setCategory(CategoryProps.category);
    globalState.setGlobalCategoryData(globalState.URL, CategoryProps.category);
  };

  return (
    <div>
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
