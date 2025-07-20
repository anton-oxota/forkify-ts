import { getRecipeById, recipeState } from "../modules/recipeModule";
import RecipeView from "../views/RecipeView";

export default async function recipeController(recipeId: string) {
    if (!recipeId) return;
    try {
        RecipeView.renderLoading();

        await getRecipeById(recipeId);

        const { recipe } = recipeState;

        if (recipe) {
            RecipeView.renderRecipe(recipe);
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log("error");
            RecipeView.renderError(error.message);
        }
    }
}
