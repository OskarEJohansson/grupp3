import { useNavigate } from "react-router-dom";

import Category from "./Components/Food/Category";
import { foodCategoryList } from "../../assets/foodCategoryList";

const CategoryPage = () => {
  const categoryList = foodCategoryList;
  const navigate = useNavigate();

  return (
    <div>
      <h1>FOOD CATEGORIES</h1>
      {categoryList.map((foodCategory) => (
        <Category key={foodCategory._id} CategoryProps={foodCategory} />
      ))}
      <button onClick={() => navigate(`/`)}>Back</button>
    </div>
  );
};

export default CategoryPage;
