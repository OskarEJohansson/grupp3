import { useState } from "react";
import { RecipeTypes } from "../../../types";
import AddToCartButton from "./RecipeAddToCartButton";
import "../../../App.css";
import RecipeGlobalState from "../utils/RecipeGlobalState";
import DetailedCard from "./RecipeDetailedCard";
import UpdateFoodButton from "../../Update/component/UpdateRecipeButton";
import { useNavigate } from "react-router-dom";
import CommentsGlobalState from "../../Comments/utils/CommentsGlobalState";

interface RecipeCardInterface {
  article: RecipeTypes;
}

const RecipeCard = ({ article }: RecipeCardInterface) => {
  const { setArticle } = RecipeGlobalState();
  const { setRecipeId, setRecipe } = CommentsGlobalState();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    setArticle(article);
    setShowModal(true);
  };

  const buttonOnClick = () => {
    setRecipeId(article._id);
    setRecipe(article);
    navigate("/category-page/comments");
  };

  return (
    <>
      <div className="card-container">Title: {article.title}</div>
      <img
        onClick={handleOnClick}
        src={article.imageUrl}
        alt="PICTURE OF DISH"
        width={300}
      />
      <div className="card-categories">Categories: {article.categories}</div>
      <div>Price: {article.price} :-</div>

      <UpdateFoodButton article={article} />
      <AddToCartButton article={article} />

      <button onClick={buttonOnClick}>See all comments</button>

      {showModal && <DetailedCard onClose={() => setShowModal(false)} />}
    </>
  );
};

export default RecipeCard;
