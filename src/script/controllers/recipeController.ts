import { getRecipeById, recipeState } from "../modules/recipeModule";
import RecipeView from "../views/RecipeView";
import renderRecipeController from "./renderRecipeController";

export default async function recipeController(recipeId: string) {
    if (!recipeId) return;
    try {
        RecipeView.renderLoading();

        // Fetch recipe
        await getRecipeById(recipeId);

        const { recipe } = recipeState;
        if (!recipe) return;

        // Render recipe
        renderRecipeController(recipe);
    } catch (error) {
        if (error instanceof Error) {
            console.log("error");
            RecipeView.renderError(error.message);
        }
    }
}
