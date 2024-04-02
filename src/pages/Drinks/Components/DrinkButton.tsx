import { useNavigate } from "react-router-dom";
import DrinkGlobalState from "../Utilities/DrinkGlobalState";

const DrinkButton = ({ category }: { category: string }) => {
  const navigate = useNavigate();
  const { setCategory } = DrinkGlobalState();

  const handleOnClick = () => {
    setCategory(category);
    navigate(`/drink-page/${category}`);
  };

  return <button onClick={handleOnClick}>{category}</button>;
};

export default DrinkButton;
