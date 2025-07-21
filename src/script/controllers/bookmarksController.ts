import { bookmarksState, toggleBookmark } from "../modules/bookmarksModule";
import { recipeState } from "../modules/recipeModule";
import BookmarksView from "../views/BookmarksView";
import RecipeView from "../views/RecipeView";

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
        BookmarksView.renderBookmarks(bookmarksState.bookmarks);

        const { recipe } = recipeState;
        if (!recipe) return;

        // Check is bookmarked
        const isBookmarked = !!bookmarksState.bookmarks.some(
            (bookmarkedRecipe) => bookmarkedRecipe.id === recipe.id
        );
        recipe.isBookmarked = isBookmarked;

        // Rerender recipe
        RecipeView.renderRecipe(recipe);
    });
}
