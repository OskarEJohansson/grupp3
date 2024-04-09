import FormGlobalState from "../utils/FormGlobalState";

const TimeInMinsInput = () => {
  const { formData, setTimeInMins } = FormGlobalState();

  const handleOnChange = (e: any) => {
    const value = parseInt(e.target.value);
    setTimeInMins(isNaN(value) ? 0 : value);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col space-y-2">
        <label className="text-lg text-gray-800">Time in Minutes</label>
        <input
          type="number"
          value={formData.timeInMins}
          onChange={handleOnChange}
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default TimeInMinsInput;
