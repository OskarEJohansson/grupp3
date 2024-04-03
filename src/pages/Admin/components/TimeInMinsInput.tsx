import FormGlobalState from "../utils/FormGlobalState";

const TimeInMinsInput = () => {
  const { formData, setTimeInMins } = FormGlobalState();

  const handleOnChange = (e: any) => {
    const value = parseInt(e.target.value);
    setTimeInMins(isNaN(value) ? 0 : value);
  };

  return (
    <div className="container">
      <div className="form-group">
        <label>Time in Minutes</label>
        <input
          type="number"
          value={formData.timeInMins}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default TimeInMinsInput;
