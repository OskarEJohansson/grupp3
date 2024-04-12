import AdminGlobalState from "../utils/AdminGlobalState";

const AdminPriceInput = () => {
  const { formData, setPrice } = AdminGlobalState();

  const handleOnChange = (e: any) => {
    const value = parseFloat(e.target.value);
    setPrice(isNaN(value) ? 0 : value);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="form-group">
        <label htmlFor="price" className="block text-sm mb-1">Price</label>
        <input
          type="number"
          id="price"
          value={formData.price}
          onChange={handleOnChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default AdminPriceInput;
