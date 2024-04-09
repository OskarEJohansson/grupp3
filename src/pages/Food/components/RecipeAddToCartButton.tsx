/* eslint-disable @typescript-eslint/no-explicit-any */
import GlobalState from "../../Cart/utils/CartGlobalState";
import "../../../App.css";

const RecipeAddToCartButton = (article: any) => {
  const { addToCart, cart } = GlobalState();

  return (
    <div>
      <button
        className="add-to-cart-button bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          addToCart(article), console.log(article), console.log(cart);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default RecipeAddToCartButton;
