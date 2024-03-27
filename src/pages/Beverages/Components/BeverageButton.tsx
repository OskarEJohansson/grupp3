import { useNavigate } from "react-router-dom";
import FoodGlobalState from "../../Food/Utilities/FoodGlobalState";

const BeverageButton = (category: any) => {
  const { setCategory } = FoodGlobalState();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/beverage-page/${category}`), setCategory(category);
  };

  return <button onClick={handleOnClick}>{category.category}</button>;
};

export default BeverageButton;
