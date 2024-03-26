import { useNavigate } from "react-router-dom";

const BeverageButton = (category: any) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/drink");
  };

  return <button onClick={handleOnClick}>{category.category}</button>;
};

export default BeverageButton;
