/* eslint-disable @typescript-eslint/no-explicit-any */
import GlobalState from "../../../../assets/Utilities/GlobalState";
import "../../../../App.css";

const AddToCartButton = (article: any) => {
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

export default AddToCartButton;
