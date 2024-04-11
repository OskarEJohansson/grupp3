import PatchRecipeButton from "./component/UpdateRecipePatchButton";
import UpdateRecipe from "./component/UpdateRecipe";

const UpdateRecipePage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Update recipe</h1>
      <UpdateRecipe />
      <div className="mt-8">
        <PatchRecipeButton />
      </div>
    </div>
  );
};
export default UpdateRecipePage;