import { useEffect, useState } from "react";
import { CardTypes } from "../types";
import GlobalState from "./GlobalState";

interface CardInterface {
  CardProps: CardTypes;
}

const Card = ({ CardProps }: CardInterface) => {
  const useGlobalState = GlobalState((state: any) => state);

  const showCart = () => {
    return useGlobalState.cart.map((item: any) => <div>{item.title}</div>);
  };

  useEffect(() => {
    showCart();
    console.log(useGlobalState.cart);
  }, [useGlobalState.cart]);

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
      <button
        onClick={() =>
          useGlobalState.addToCartCart({ CardProps }, console.log(CardProps))
        }
      >
        Add to cart
      </button>
      <div>{showCart()}</div>
    </>
  );
};

export default Card;
