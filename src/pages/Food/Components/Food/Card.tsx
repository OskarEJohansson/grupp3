/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import GlobalState, {
  GlobalStateInterface,
} from "../../../../assets/Utilities/GlobalState";
import { CardTypes } from "../../../../types";

interface CardInterface {
  article: CardTypes;
}

const Card = ({ article }: CardInterface) => {
  const globalState = GlobalState<GlobalStateInterface>((state: any) => state);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/${article._id}`);
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
      <button onClick={() => globalState.addToCart({ article })}>
        Add to cart
      </button>
    </>
  );
};

export default Card;
