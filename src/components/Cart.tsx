/* eslint-disable @typescript-eslint/no-explicit-any */

import GlobalState from "../assets/Utilities/GlobalState";

const Cart = () => {
  const cart = GlobalState((state) => state.cart);

  return (
    <div>
      <h2>Your shopping cart</h2>

      {cart.map((cartItem: any, index: number) => (
        <div key={index} className="movie-list">
          CartItem: {cartItem.article.title} <br />
          <img
            src={cartItem.article.imageUrl}
            alt="PICTURE OF DISH"
            width={300}
          />
          <div>Price: $$$</div>
        </div>
      ))}
      <button>CHECK OUT</button>
    </div>
  );
};

export default Cart;
