import { useEffect } from "react";
import FormGlobalState from "../Utils/FormGlobalState";

interface InputFormBaseProps {
  inputLabel: string;
}

const InputFormBase = ({ inputLabel }: InputFormBaseProps) => {
  const { setTitle, formData } = FormGlobalState();

  useEffect(() => {
    console.log(formData.title);
  }, [formData.title]);

  //ADD VALUE IN INPUT
  return (
    <>
      <label htmlFor={inputLabel}>{inputLabel}</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
    </>
  );
};

export default InputFormBase;
