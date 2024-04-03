import FormGlobalState from "../utils/FormGlobalState";

const PriceInput = () => {
  const { formData, setPrice } = FormGlobalState();

  const handleOnChange = (e: any) => {
    const value = parseFloat(e.target.value);
    setPrice(isNaN(value) ? 0 : value);
  };

  return (
    <div className="container">
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          value={formData.price}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default PriceInput;
