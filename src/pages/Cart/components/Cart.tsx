import { useNavigate } from "react-router-dom";
import CartGlobalState from "../utils/CartGlobalState";

const Cart = () => {
  const { cart, removeFromCart } = CartGlobalState();
  const navigate = useNavigate();

  const totalPrice = cart
    .reduce((acc, cartItem: any) => {
      const price = parseFloat(cartItem.article.price);
      if (!isNaN(price)) {
        return acc + price;
      } else {
        console.error(`Invalid price for item: ${cartItem.article.title}`);
        return acc;
      }
    }, 0)
    .toFixed(2);

  return (
    <div className="cart-container">
      <h2 className="cart-heading text-xl font-semibold mb-4 text-center">
        Your shopping cart
      </h2>

      {cart.length === 0 ? (
        <div className="empty-cart-message bg-white p-6 md:p-8 rounded-lg shadow-md text-center text-gray-800 font-sans antialiased mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2 border-b-2 pb-2">
            Your cart is empty
          </h3>
          <p className="text-gray-600 mt-4">Add some items to get started!</p>
        </div>
      ) : (
        <>
          {cart.map((cartItem: any, index) => (
            <div
              key={index}
              className="cart-item flex items-center border-b border-gray-200 py-4"
            >
              <div className="flex-shrink-0 w-24">
                <img
                  src={
                    cartItem.article.imageUrl || cartItem.article.strDrinkThumb
                  }
                  alt="PICTURE OF DISH"
                  className="w-full h-auto"
                  style={{ maxHeight: "80px" }}
                />
              </div>
              <div className="ml-4">
                <div className="cart-item-title font-semibold">
                  {cartItem.article.title || cartItem.article.strDrink}
                </div>
                <div className="cart-item-price">
                  Price: {cartItem.article.price}
                </div>
                <button
                  className="remove-item-button text-sm text-red-600 hover:text-red-800 focus:outline-none"
                  onClick={() => removeFromCart(cartItem)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 mb-4 text-center">
            Total Price: ${totalPrice}
          </div>
          <div className="checkout-button mt-4 flex justify-center">
            <button
              className="bg-yellow-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-yellow-400"
              onClick={() => navigate("/checkoutpage")}
            >
              CHECK OUT
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
