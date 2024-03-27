import { useNavigate } from "react-router-dom";
import BeverageGlobalState from "../Utilities/BeveragesGlobalState";

const BeverageButton = ({ category }: { category: string }) => {
  const { setCategory } = BeverageGlobalState();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/beverage-page/${category}`);
    setCategory(category);
  };

  return <button onClick={handleOnClick}>{category}</button>;
};

export default BeverageButton;
