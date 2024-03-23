import InputFormBase from "./Components/InputFormBase";
import FormGlobalState from "./Utils/FormGlobalState";

const AdminPage = () => {
  const { formData } = FormGlobalState();

  console.log("title", formData.title);
  console.log("description", formData.description);
  console.log(formData);

  return (
    <div>
      <h1>INPUT FORM</h1>
      <InputFormBase inputLabel="title" />
      <InputFormBase inputLabel="description" />
    </div>
  );
};

export default AdminPage;
