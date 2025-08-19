import {
    createUploadRecipeData,
    uploadRecipe,
} from "../modules/uploadRecipeModule";
import NewRecipeView from "../views/NewRecipeView";

async function uploadRecipeController() {
    const form = NewRecipeView.newRecipeForm;
    const uploadRecipeData = createUploadRecipeData(form);

    const result = await uploadRecipe(uploadRecipeData);
    console.log(result);
}

export default uploadRecipeController;
