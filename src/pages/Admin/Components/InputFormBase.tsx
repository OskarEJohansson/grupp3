import { useState } from "react";
import FormGlobalState from "../Utils/FormGlobalState";

interface InputFormBaseProps {
  inputLabel: string;
}

const InputFormBase = ({ inputLabel }: InputFormBaseProps) => {
  const {
    setTitle,
    setDescription,
    setCategories,
    setImageUrl,
    setInstructions,
  } = FormGlobalState();
  const [input, setInput] = useState("");

  const handleOnChange = (e: any) => {
    setInput(e.target.value);

    switch (inputLabel) {
      case "title":
        setTitle(input);
        break;
      case "description":
        setDescription(input);
        break;
      case "categories":
        setCategories(input);
        break;
      case "image":
        setImageUrl(input);
        break;
      case "instructions":
        setInstructions(input);
    }
  };

  return (
    <>
      <label>{inputLabel}</label>
      <input type="text" onChange={handleOnChange} />
    </>
  );
};

export default InputFormBase;
