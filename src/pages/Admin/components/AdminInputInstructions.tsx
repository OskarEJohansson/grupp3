import AdminGlobalState from "../utils/AdminGlobalState";

const AdminInputInstructions = () => {
  const { formData, addInstructions, setInstructions } = AdminGlobalState();

  const handleAddInstructions = (index: number, newInstructions: string) => {
    const instructions = [...formData.instructions];
    instructions[index] = newInstructions;
    setInstructions(instructions);
  };

  const handleAddStep = () => {
    addInstructions("");
  };

  return (
    <div className="container mx-auto px-4">
      <div className="form-group">
        <h3 className="text-lg font-semibold mb-2" style={{ cursor: "default" }}>Instructions</h3>
        {formData.instructions.map((instruction, index) => (
          <div key={index} className="mb-4">
            <fieldset>
              <label htmlFor={`step${index}`} className="block text-sm mb-1">Step {index + 1}</label>
              <input
                type="text"
                id={`step${index}`}
                value={instruction}
                onChange={(e) => handleAddInstructions(index, e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
            </fieldset>
          </div>
        ))}
        <button
          onClick={handleAddStep}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Step
        </button>
      </div>
    </div>
  );
};

export default AdminInputInstructions;
