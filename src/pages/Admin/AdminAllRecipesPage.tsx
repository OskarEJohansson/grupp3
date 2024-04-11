import AdminDeleteAllRecipesButton from "./components/AdminDeleteAllRecipesButton";
import AdminRecipeList from "./components/AdminRecipeList";

const AdminAllRecipesPage = () => {
  return (
    <div className="container mx-auto">
      <AdminRecipeList />
      <div className="mt-8">
        <AdminDeleteAllRecipesButton />
      </div>
    </div>
  );
};

export default AdminAllRecipesPage;