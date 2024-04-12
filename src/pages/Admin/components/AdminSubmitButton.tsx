import axios from "axios";
import AdminGlobalState from "../utils/AdminGlobalState";
import { useState } from "react";

const AdminSubmitButton = () => {
  const { formData } = AdminGlobalState();
  const [error, setError] = useState("");

  const validateForm = () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.imageUrl ||
      formData.categories.length === 0 ||
      formData.instructions.length === 0 ||
      formData.ingredients.length === 0 ||
      formData.price === 0 ||
      formData.timeInMins === 0
    ) {
      setError("All fields are required before you can submit form");
      return false;
    }
    return true;
  };

  const handleOnClick = async (event: any) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "https://sti-java-grupp3-mzba2l.reky.se/recipes",
        formData
      );

      if (response.status === 200) {
        console.log("Submit form response status:", response.status);
        console.log("Submit form response data:", response.data);

        window.location.reload();

      } else {
        console.log("Error posting submitForm", response.status);
      }
    } catch (error) {
      console.log("Error posting submitForm", error);
    }
  };

  return (
    <form onSubmit={handleOnClick}>
    <div className="flex justify-center">
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Submit Form
    </button>
    </div>
    {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default AdminSubmitButton;
