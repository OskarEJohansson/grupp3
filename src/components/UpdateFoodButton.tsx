import FoodGlobalState from "../pages/Food/Utilities/FoodGlobalState"

const UpdateFoodButton = () => {

    const { patchArticle } = FoodGlobalState()

    const handleUpdate = () => {

    }

  return (
    <div>
      <button onChange={handleUpdate}>Update food item</button>
    </div>
  )
}

export default UpdateFoodButton
