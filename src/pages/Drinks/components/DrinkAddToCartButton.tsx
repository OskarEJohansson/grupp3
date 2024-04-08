import GlobalState from "../../Cart/utils/CartGlobalState";
import "../../../App.css";

const DrinkaddToCartButton = (article: any) => {
  const { addToCart, cart } = GlobalState();

  return (
    <div>
      <button
        className="add-to-cart-button"
        onClick={() => {
          addToCart(article), console.log(article), console.log(cart);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default DrinkaddToCartButton;