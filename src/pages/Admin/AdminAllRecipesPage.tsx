import AdminCategoryCard from "./components/AdminCategoryCard";
import AdminDeleteAllRecipesButton from "./components/AdminDeleteAllRecipesButton";
import AdminRecipeList from "./components/AdminRecipeList";

const AdminAllRecipesPage = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1>Categories</h1>
        <AdminCategoryCard />
      </div>

      <AdminRecipeList />
      <div className="mt-8">
        <AdminDeleteAllRecipesButton />
      </div>
    </div>
  );
};

export default AdminAllRecipesPage;
