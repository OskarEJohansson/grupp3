/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardTypes } from "../types";
import GlobalState from "./GlobalState";

interface CardInterface {
  article: CardTypes;
}

const Card = ({ article }: CardInterface) => {
  const useGlobalState = GlobalState((state: any) => state);

  return (
    <>
      <div>Title: {article.title}</div>
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
      <button onClick={() => useGlobalState.addToCart({ article })}>
        Add to cart
      </button>
    </>
  );
};

export default Card;
