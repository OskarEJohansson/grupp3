import { useNavigate } from "react-router-dom";
import { CardTypes } from "../../../../types";
import AddToCartButton from "./AddToCartButton";
import "../../../../App.css";
import FoodGlobalState from "../../Utilities/FoodGlobalState";

interface CardInterface {
  article: CardTypes;
}

const Card = ({ article }: CardInterface) => {
  const { setArticle } = FoodGlobalState();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`${article.title}`);
    setArticle(article);
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
        {article.ingredients.map((ingredient: any, index: number) => {
          return (
            <div className="card-ingredient" key={index}>
              <p>Ingredient: {ingredient.name}</p>
            </div>
          );
        })}
      </div>
      <AddToCartButton article={article} />
    </>
  );
};

export default Card;
