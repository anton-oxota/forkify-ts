import { bookmarksState } from "../modules/bookmarksModule";
import type { Recipe } from "../modules/recipeModule";
import RecipeView from "../views/RecipeView";

function renderRecipeController(recipe: Recipe) {
    // Check is recipe bookmarked
    const isBookmarked = !!bookmarksState.bookmarks.some(
        (bookmarkedRecipe) => bookmarkedRecipe.id === recipe.id
    );
    recipe.isBookmarked = isBookmarked;

    // Rerender recipe
    RecipeView.renderRecipe(recipe);
}

export default renderRecipeController;
