import { useNavigate } from "react-router-dom";
import Category from "./Components/Food/Category";
import { foodCategoryList } from "../../assets/foodCategoryList";
import "../../App.css"

const CategoryPage = () => {
  const categoryList = foodCategoryList;
  const navigate = useNavigate();

  return (
    <div className="category-container">
      <h1 className="category-heading">FOOD CATEGORIES</h1>
      <div className="category-content">
      {categoryList.map((foodCategory) => (
        <Category key={foodCategory._id} CategoryProps={foodCategory} />
      ))}
      </div>
      <button className="back-button" onClick={() => navigate(`/`)}>Back</button>
    </div>
  );
};

export default CategoryPage;
