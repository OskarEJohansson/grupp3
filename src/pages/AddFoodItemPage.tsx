import AddFoodItem from '../components/AddFoodItem';
import RecipeList from '../components/RecipeList';
import AddTitle from './Food/Components/AddFood/AddTitle';

const AddFoodItemPage = () => {
    
  return (
    <div>
      <h1>Add Food</h1>
      <AddFoodItem />
      <hr />
      <RecipeList />
      {/* < AddTitle /> */}
    </div>
  );
}

export default AddFoodItemPage