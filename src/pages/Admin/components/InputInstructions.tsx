import FormGlobalState from "../utils/FormGlobalState";

const InputInstructions = () => {
  const { formData, addInstructions, setInstructions } = FormGlobalState();

  const handleAddInstructions = (index: number, newInstructions: string) => {
    const instructions = [...formData.instructions];
    instructions[index] = newInstructions;
    setInstructions(instructions);
  };

  const handleAddStep = () => {
    addInstructions("");
  };

  return (
    <div className="container">
      <div className="form-group">
        <h3>Instructions</h3>
        {formData.instructions.map((instruction, index) => (
          <div key={index}>
            <fieldset>
              <label>Step {index + 1}</label>
              <input
                type="text"
                value={instruction}
                onChange={(e) => handleAddInstructions(index, e.target.value)}
              />
            </fieldset>
          </div>
        ))}
        <button onClick={handleAddStep}>Add Step</button>
      </div>
    </div>
  );
};

export default InputInstructions;
