import { bookmarksState, toggleBookmark } from "../modules/bookmarksModule";
import { recipeState } from "../modules/recipeModule";
import renderBookmarksController from "./renderBookmarksController";
import renderRecipeController from "./renderRecipeController";

export default function bookmarksController() {
    // Toggle recipe bookmark
    if (recipeState.recipe) toggleBookmark(recipeState.recipe);

    // Render bookmarks
    renderBookmarksController(bookmarksState.bookmarks);

    // Render recipe
    const { recipe } = recipeState;
    if (!recipe) return;

    renderRecipeController(recipe);
}
