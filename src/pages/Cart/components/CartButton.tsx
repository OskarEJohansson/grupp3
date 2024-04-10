import { useState } from "react";
import ShoppingCartIcon from "./ShoppingCart";
import CartSidebar from "./CartSidebar";
import CartGlobalState from "../utils/CartGlobalState";

const CartButton = () => {
  const { cart, removeFromCart } = CartGlobalState();
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div>
      <button onClick={toggleCartVisibility}>
        <ShoppingCartIcon />
        Cart ({cart.length})
      </button>
      {cartVisible && <CartSidebar removeFromCart={removeFromCart} />}
    </div>
  );
};

export default CartButton;
