import { useEffect } from "react";

const CheckoutPage = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/"; 
      
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="checkout-container text-center">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <p>Your purchase has been done, payment successful.</p>
      <p>Redirecting to homepage...</p>
    </div>
  );
};

export default CheckoutPage;
