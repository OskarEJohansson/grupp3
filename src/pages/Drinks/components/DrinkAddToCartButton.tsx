import React, { useState } from "react";
import GlobalState from "../../Cart/utils/CartGlobalState";
import "../../../App.css";

const DrinkAddToCartButton = (article: any) => {
  const { addToCart } = GlobalState();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation(); 
    addToCart(article);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1000);
  };

  return (
    <div>
      <button
        className={`bg-${addedToCart ? "green" : "yellow"}-500 hover:bg-${addedToCart ? "green" : "yellow"}-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors`}
        onClick={handleAddToCart}
        disabled={addedToCart}
      >
        {addedToCart ? "Added to cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default DrinkAddToCartButton;
