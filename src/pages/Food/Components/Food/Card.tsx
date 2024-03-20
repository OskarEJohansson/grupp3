import { useNavigate } from "react-router-dom";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";
import { CardTypes } from "../../../../types";
import AddToCartButton from "./AddToCartButton";

interface CardInterface {
  article: CardTypes;
}

const Card = ({ article }: CardInterface) => {
  const globalState = GlobalState<GlobalStateInterface>((state: any) => state);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/detailedmealpage`);
    globalState.setGlobalArticleId(`${article._id}`);
    globalState.setGlobalArticle(article);
  };

  return (
    <>
      <div>Title: {article.title}</div>
      <img
        onClick={handleOnClick}
        src={article.imageUrl}
        alt="PICTURE OF DISH"
        width={300}
      />
      <div>Categories: {article.categories}</div>
      <div>
        {article.ingredients.map((ingredient: any, index: number) => {
          return (
            <div key={index}>
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
