/* eslint-disable @typescript-eslint/no-explicit-any */
import GlobalState from './GlobalState';

const Cart = () => {

const cart = GlobalState ((state) => state.cart)  
  
  

 /*  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter(item => item.id !== itemToRemove.id));
  }; */

 return (
    <div>
      <h2>Your shopping cart</h2>
      <ul>
  {cart.map((cartItem: any, index: number) => (
    <div key={index}>
      <p>{cartItem.CardProps.title}</p>
    </div>
  ))}
</ul>
</div>
  );
};  


export default Cart;
