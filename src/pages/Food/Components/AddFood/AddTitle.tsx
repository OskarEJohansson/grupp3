import AddFoodGlobalState from "../../Utilities/AddFoodGlobalState";

const AddTitle = () => {
    const setTitle = AddFoodGlobalState((state) => state);

    return (
        <form className="title-form">
            <div className="form-group">
                <label htmlFor="title">Food title</label>
                <input 
                type="text" 
                name="title" 
                id="title"
                onChange={(e) => { setTitle.setTitle(e.target.value), console.log(setTitle.title)}}
                required
                />
            </div>
        </form>
    )
}
export default AddTitle;