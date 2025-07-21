import { bookmarksState } from "../modules/bookmarksModule";
import { getRecipeById, recipeState } from "../modules/recipeModule";
import RecipeView from "../views/RecipeView";

export default async function recipeController(recipeId: string) {
    if (!recipeId) return;
    try {
        RecipeView.renderLoading();

        // Fetch recipe
        await getRecipeById(recipeId);

        const { recipe } = recipeState;
        if (!recipe) return;

        // Check is bookmarked
        const isBookmarked = !!bookmarksState.bookmarks.some(
            (bookmarkedRecipe) => bookmarkedRecipe.id === recipe.id
        );

        recipe.isBookmarked = isBookmarked;

        // Render recipe
        RecipeView.renderRecipe(recipe);
    } catch (error) {
        if (error instanceof Error) {
            console.log("error");
            RecipeView.renderError(error.message);
        }
    }
}
