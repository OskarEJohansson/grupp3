import { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);


export const showCart = (showCartProps: any) => {
  <div>
    {showCartProps.map((item: any) => (
      <div>{item.title}</div>
    ))}
  </div>;
  return;
};

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item.id !== itemToRemove.id));
  };

  return (
    <div>
      <h2>Your shopping cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
