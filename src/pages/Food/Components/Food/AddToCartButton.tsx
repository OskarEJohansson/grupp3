import GlobalState from "../../../../assets/Utilities/GlobalState";

const AddToCartButton = (article: any) => {
  const addToCart = GlobalState((state: any) => state.addToCart);

  return (
    <div>
      <button onClick={() => addToCart({ article })}>Add to cart</button>
    </div>
  );
};

export default AddToCartButton;
