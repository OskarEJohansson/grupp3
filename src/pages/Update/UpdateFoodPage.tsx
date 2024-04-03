import UpdateFood from "./component/UpdateFood";
import UpdateFoodGlobalState from "./utils/UpdateFoodGlobalState";

const UpdateFoodPage = () => {
  const { formData } = UpdateFoodGlobalState();
  return (
    <div>
      <UpdateFood article={formData} />
    </div>
  );
};

export default UpdateFoodPage;
