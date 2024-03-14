import { CardTypes } from "../types";
import GlobalState from "./GlobalState";

interface CardInterface {
  CardProps: CardTypes;
}


const Card = ({ CardProps }: CardInterface) => {
  const useGlobalState = GlobalState((state: any) => state);

  return (
    <>
      <div>Title: {CardProps.title}</div>
      <div>Categories: {CardProps.categories}</div>
      <div>
        {CardProps.ingredients.map((object) => {
          return (
            <div>
              <p>Ingredient: {object.name}</p>
            </div>
          );
        })}
      </div>
      <div>Show Rating * * * * * </div>
      <button onClick={() => useGlobalState.addToCart({ CardProps })}>
        Add to cart
      </button>
    </>
  );
};

export default Card;
