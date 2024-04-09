import axios from "axios";
import FormGlobalState from "../utils/FormGlobalState";

const SubmitButton = ({ resetFormData }) => {
  const { formData } = FormGlobalState();

  const handleOnClick = async () => {
    try {
      const response = await axios.post(
        "https://sti-java-grupp3-mzba2l.reky.se/recipes",
        formData
      );

      if (response.status === 200) {
        console.log("Submit form response status:", response.status);
        console.log("Submit form response data:", response.data);
        
        resetFormData();

      } else {
        console.log("Error posting submitForm", response.status);
      }
    } catch (error) {
      console.log("Error posting submitForm", error);
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Submit Form
    </button>
  );
};

export default SubmitButton;
