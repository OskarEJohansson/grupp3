import FormGlobalState from "../Utils/FormGlobalState";
import { CardTypes } from "../../../types";

const UpdateCard = (objectToUpdate?: CardTypes) => {
  const { formData, setData } = FormGlobalState();

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setData(name, value);
  };

  return (
    <div>
      <form>
        <input name="title" value={formData.title} onChange={handleOnChange} />
        <br />
        <input
          name="description"
          value={formData.description}
          onChange={handleOnChange}
        />
        <br />
        <input
          name="instructions"
          value={formData.instructions}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
};

export default UpdateCard;
