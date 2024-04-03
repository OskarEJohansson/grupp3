import FormGlobalState from "../utils/FormGlobalState";

interface InputFormBaseProps {
  inputLabel: string;
}

const InputFormBase = ({ inputLabel }: InputFormBaseProps) => {
  const { setTitle, setDescription, setImageUrl } =
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
    }
  };

  return (
    <>
    <div className="container">
      <div className="form-group">
        <label>{inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}</label>
        <input type="text" onChange={handleOnChange} />
      </div>
    </div>
    </>
  );
};

export default InputFormBase;