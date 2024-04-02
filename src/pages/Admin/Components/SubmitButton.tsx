import axios from "axios";
import FormGlobalState, { Ingredient } from "../Utils/FormGlobalState";

const SubmitButton = () => {
  const { formData, formDataIngredients, addIngredient: addFormDataIngredients } =
    FormGlobalState();

  const handleOnClick = async () => {
    try {
      const response = await axios.post(
        "https://sti-java-grupp3-mzba2l.reky.se/recipes",
        formData
      );

      if (response.status === 200) {
        console.log("Submit form response status:", response.status);
        console.log("Submit form response data:", response.data);
      } else {
        console.log("Error posting submitForm", response.status);
      }
    } catch (error) {
      console.log("Error posting submitForm", error);
    }
  };

  return <button onClick={handleOnClick}>Submit Form</button>;
};

export default SubmitButton;
