import { useNavigate } from "react-router-dom";
import BeverageGlobalState from "../Utilities/BeveragesGlobalState";

const BeverageButton = ({ category }: { category: string }) => {
  const navigate = useNavigate();
  const { setCategory } = BeverageGlobalState();

  const handleOnClick = () => {
    setCategory(category); 
    navigate(`/beverage-page/${category}`);
  };

  return <button onClick={handleOnClick}>{category}</button>;
};

export default BeverageButton;
