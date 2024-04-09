import axios from "axios"
import { useState } from "react";

const DeleteAllRecipesButton = () => {

    const url = "https://sti-java-grupp3-mzba2l.reky.se"

    const [showConfirmation, setShowConfirmation] = useState(false);


    const handleDeleteAllRecipes = () => {
        setShowConfirmation(true);
    };

    const confirmDelete = () => {
        deleteAllRecipes();
        setShowConfirmation(false);
    };

    const cancelDelete = () => {
        setShowConfirmation(false);
    };


    const deleteAllRecipes = async () => {
        try {
            const response = await axios.get(`${url}/clear`)
            if (response.status === 200) {
                console.log("Deletion successfull")
            }

        } catch (error) {
            console.log("Delete all recipes failed", error)
        }

    }

    return (
        <div>
            <h1 style={{ color: 'red', textAlign: 'center' }}>Danger Zone</h1>
            <button className="delete-all-recipes" onClick={handleDeleteAllRecipes}>
                Delete all recipes
            </button>
            {showConfirmation && (
                <div className="confirmation-modal">
                    <p>Are you sure you want to delete all recipes?</p>
                    <button onClick={confirmDelete}>Yes</button>
                    <button onClick={cancelDelete}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default DeleteAllRecipesButton;