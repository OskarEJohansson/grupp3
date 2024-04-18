import AdminGlobalState from "../utils/AdminGlobalState";

const AdminTimeInMinsInput = () => {
  const { formData, setTimeInMins } = AdminGlobalState();

  const handleOnChange = (e: any) => {
    const value = parseInt(e.target.value);
    setTimeInMins(isNaN(value) ? 0 : value);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="timeInMins" className="text-lg text-gray-800">Time in Minutes</label>
        <input
          type="number"
          id="timeInMins"
          placeholder="Cooking Time"
          value={formData.timeInMins}
          min={0}
          onClick={() => setTimeInMins({ ...formData, price: null })} //Only way to make zero dissapear when field is active
          onChange={handleOnChange}
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default AdminTimeInMinsInput;
