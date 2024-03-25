import { useNavigate } from "react-router-dom";
import { CardTypes } from "../../../../types";
import AddToCartButton from "./AddToCartButton";
import "../../../../App.css";
import FoodGlobalState from "../../Utilities/FoodGlobalState";

const DetailedCard = () => {
  const navigate = useNavigate();
  const article = FoodGlobalState((state) => state.article as CardTypes);
  const { category } = FoodGlobalState();

  const handleOnClick = () => {
    navigate(`/category-page/${category}`);
  };

  return (
    <div className="detailed-card-container">
      <h1 className="detailed-card-title">DETAILED CARD</h1>
      <div className="detailed-card-info">
        Title: {article.title} <br />
        Category: {article.categories} <br />
        Description: {article.description} <br />
      </div>
      <AddToCartButton article={article} />
      <button className="back-button" onClick={handleOnClick}>
        Back
      </button>
    </div>
  );
};

export default DetailedCard;
