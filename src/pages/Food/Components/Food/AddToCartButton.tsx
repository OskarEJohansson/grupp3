import GlobalState from "../../../../assets/Utilities/GlobalState";
import "../../../../App.css"

const AddToCartButton = (article: any) => {
  const addToCart = GlobalState((state: any) => state);

  return (
    <div>
      <button className="add-to-cart-button"
        onClick={() => {
          addToCart.addToCart(article),
            console.log(article),
            console.log(addToCart.cart);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartButton;
