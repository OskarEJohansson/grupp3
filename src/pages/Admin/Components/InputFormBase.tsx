import FormGlobalState from "../Utils/FormGlobalState";

interface InputFormBaseProps {
  inputLabel: string;
}

const InputFormBase = ({ inputLabel }: InputFormBaseProps) => {
  const { setTitle, setDescription, setImageUrl, setInstructions } =
    FormGlobalState();

  const handleOnChange = (e: any) => {
    switch (inputLabel) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "image":
        setImageUrl(e.target.value);
        break;
      case "instructions":
        setInstructions(e.target.value);
    }
  };

  return (
    <>
      <label>{inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}</label>
      <input type="text" onChange={handleOnChange} />
    </>
  );
};

export default InputFormBase;
