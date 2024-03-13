import { CardTypes } from "../types";

interface CardInterface {
  CardProps: CardTypes;
}

const Card = ({ CardProps }: CardInterface) => {
  return (
    <>
      <div>Title: {CardProps.title}</div>
      <div>Categories: {CardProps.categories}</div>
      <div>
        {CardProps.ingredients.map((object) => {
          return (
            <div>
              <p>Ingredient: {object.name}</p>
              <p>Amount: {object.amount}</p>
              <p>Unit: {object.unit}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
