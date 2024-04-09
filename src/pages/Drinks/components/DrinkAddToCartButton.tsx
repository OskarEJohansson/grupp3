/* eslint-disable @typescript-eslint/no-explicit-any */
import GlobalState from "../../Cart/utils/CartGlobalState";
import "../../../App.css";

const DrinkaddToCartButton = (article: any) => {
  const { addToCart, cart } = GlobalState();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation(); 
    addToCart(article);
    console.log(article);
    console.log(cart);
  };

  return (
    <div>
      <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default DrinkaddToCartButton;
