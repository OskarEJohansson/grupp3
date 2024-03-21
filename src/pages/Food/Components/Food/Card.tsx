import { useNavigate } from "react-router-dom";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";
import { CardTypes } from "../../../../types";
import AddToCartButton from "./AddToCartButton";
import "../../../../App.css";

interface CardInterface {
  article: CardTypes;
}

const Card = ({ article }: CardInterface) => {
  const globalState = GlobalState<GlobalStateInterface>((state: any) => state);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`${article.title}`);
    globalState.setGlobalArticle(article);
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
