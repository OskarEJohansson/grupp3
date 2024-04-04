import { useState } from "react";
import { RecipeTypes } from "../../../types";
import AddToCartButton from "./RecipeAddToCartButton";
import "../../../App.css";
import RecipeGlobalState from "../utils/RecipeGlobalState";
import DetailedCard from "./RecipeDetailedCard";
import UpdateFoodButton from "../../Update/component/UpdateRecipeButton";

interface RecipeCardInterface {
  article: RecipeTypes;
}

const RecipeCard = ({ article }: RecipeCardInterface) => {
  const { setArticle } = RecipeGlobalState();
  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => {
    setArticle(article);
    setShowModal(true);
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
      <div className="card-ingredients-container">
        {article.ingredients.map((ingredient, index) => {
          return (
            <div className="card-ingredient" key={index}>
              <p>Ingredient: {ingredient.name}</p>
            </div>
          );
        })}
      </div>
      <div>Price: {article.price} :-</div>

      <div>
        <UpdateFoodButton article={article} />
      </div>

      <AddToCartButton article={article} />

      {showModal && <DetailedCard onClose={() => setShowModal(false)} />}
    </>
  );
};

export default RecipeCard;
