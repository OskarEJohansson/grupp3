/* eslint-disable @typescript-eslint/no-explicit-any */

import GlobalState from "../utils/CartGlobalState";

const Cart = () => {
  const cart = GlobalState((state) => state.cart);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your shopping cart</h2>

      {cart.map((cartItem: any, index: number) => (
        <div key={index} className="cart-item">
          <div className="cart-item-title">CartItem: {cartItem.article.title}</div>
          <img
            src={cartItem.article.imageUrl}
            alt="PICTURE OF DISH"
            className="cart-item-image"
          />
          <div className="cart-item-price">Price: $$$</div>
        </div>
      ))}
      <button>CHECK OUT</button>
    </div>
  );
};

export default Cart;
