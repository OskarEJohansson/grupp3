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
      <div onClick={handleOnClick}>Title: {article.title}</div>
      <div>Categories: {article.categories}</div>
      <div>
        {article.ingredients.map((object: any, index: number) => {
          return (
            <div key={index}>
              <p>Ingredient: {object.name}</p>
            </div>
          );
        })}
      </div>
      <div>Show Rating * * * * * </div>

      <AddToCartButton article={article} />
    </>
  );
};

export default Card;
