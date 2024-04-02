import FormGlobalState, {
  FormGlobalStateInterface,
} from "../Utils/FormGlobalState";

interface InputFormBaseProps {
  setFunction: keyof FormGlobalStateInterface["setters"];
  lable: string;
}

const InputFormBase = ({ setFunction, lable }: InputFormBaseProps) => {
  const { setters } = FormGlobalState((state) => state);
  const setter = setters[setFunction];

  const handleOnChange = (e: any) => {
    setter(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="form-group">
          <label>{lable}</label>
          <input type="text" onChange={handleOnChange} />
        </div>
      </div>
    </>
  );
};

export default InputFormBase;
