/* eslint-disable @typescript-eslint/no-explicit-any */

import GlobalState from "../assets/Utilities/GlobalState";


const Cart = () => {
  const cart = GlobalState((state) => state.cart);

  return (
    <div>
      <h2>Your shopping cart</h2>
      <ul>
        {cart.map((cartItem: any, index: number) => (
          <div key={index}>
            <p>{cartItem.article.title}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
