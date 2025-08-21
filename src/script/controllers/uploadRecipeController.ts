import { bookmarksState, toggleBookmark } from "../modules/bookmarksModule";
import {
    createUploadRecipeData,
    uploadRecipe,
} from "../modules/uploadRecipeModule";
import Components from "../views/Components";
import NewRecipeView from "../views/NewRecipeView";
import renderBookmarksController from "./renderBookmarksController";

async function uploadRecipeController() {
    const form = NewRecipeView.newRecipeForm;
    const uploadRecipeData = createUploadRecipeData(form);

    // Loading
    NewRecipeView.renderMessage(Components.spinner());

    // Uploading
    try {
        const recipe = await uploadRecipe(uploadRecipeData);
        NewRecipeView.renderMessage("Upload Succeed");

        // Set uploaded recipe as bookmarked
        toggleBookmark(recipe.data.recipe);
        // Render bookmarks
        renderBookmarksController(bookmarksState.bookmarks);

        setTimeout(() => {
            NewRecipeView.renderSubmitButton();
        }, 1000);
    } catch (error) {
        if (error instanceof Error) {
            NewRecipeView.renderMessage(error.message);

            setTimeout(() => {
                NewRecipeView.renderSubmitButton();
            }, 5 * 1000);
        }
    }
}

export default uploadRecipeController;
