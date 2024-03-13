import { useEffect, useState } from "react";
import { CardTypes } from "../types";

interface CardInterface {
  CardProps: CardTypes;
}

const Card = ({ CardProps }: CardInterface) => {
  const [addedToCart, setAddedToCart] = useState<CardTypes[]>([]);

  const handleOnClick = (object: CardTypes) => {
    setAddedToCart([...addedToCart, object]);
  };

  const showCart = () => {
    return (
      <>
        {addedToCart.map((cart) => (
          <div>{cart.title}</div>
        ))}
      </>
    );
  };

  useEffect(() => {
    showCart();
  }, [addedToCart]);

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
      <button onClick={() => handleOnClick(CardProps)}>Add to cart</button>å
      <div>{showCart()}</div>
    </>
  );
};

export default Card;
