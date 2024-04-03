import { useState } from "react";
import { CardTypes } from "../../../types";
import AddToCartButton from "./AddToCartButton";
import "../../../App.css";
import FoodGlobalState from "../utils/FoodGlobalState";
import DetailedCard from "./DetailedCard";
import UpdateFoodButton from "../../Update/component/UpdateFoodButton";

interface CardInterface {
  article: CardTypes;
}

const Card = ({ article }: CardInterface) => {
  const { setArticle } = FoodGlobalState();
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
      <div>price{article.price} :-</div>

      <div>
        <UpdateFoodButton article={article} />
      </div>

      <AddToCartButton article={article} />

      {showModal && <DetailedCard onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Card;
