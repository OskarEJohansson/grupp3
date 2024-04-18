import axios from "axios";
import AdminGlobalState from "../utils/AdminGlobalState";
import { useState } from "react";

const AdminSubmitButton = () => {
  const { formData } = AdminGlobalState();
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!formData.title) {
      setError("Title field is required");
      return false;
    } else if (!formData.description) {
      setError("Description field is required");
      return false;
    } else if (!formData.imageUrl) {
      setError("Image URL field is required");
      return false;
    } else if (formData.categories.length === 0) {
      setError("At least one category must be selected");
      return false;
    } else if (formData.instructions.length === 0) {
      setError("At least one instruction must be provided");
      return false;
    } else if (formData.ingredients.length === 0) {
      setError("At least one ingredient must be provided");
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
