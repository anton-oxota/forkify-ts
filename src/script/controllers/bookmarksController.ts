import { bookmarksState, toggleBookmark } from "../modules/bookmarksModule";
import { recipeState } from "../modules/recipeModule";
import RecipeView from "../views/RecipeView";
import renderBookmarksController from "./renderBookmarksController";
import renderRecipeController from "./renderRecipeController";

export default function bookmarksController() {
    const recipeContainer = RecipeView.recipeContainer;

    // Add event listener
    recipeContainer.addEventListener("click", (event) => {
        if (!event.target) return;

        const target = event.target as Element;

        // Targeting bookmark button
        if (!target.closest(".btn-bookmark")) return;

        // Toggle recipe bookmark
        if (recipeState.recipe) toggleBookmark(recipeState.recipe);

        // Render bookmarks
        renderBookmarksController(bookmarksState.bookmarks);

        // Render recipe
        const { recipe } = recipeState;
        if (!recipe) return;

        renderRecipeController(recipe);
    });
}
