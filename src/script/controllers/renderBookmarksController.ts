import type { Recipe } from "../modules/recipeModule";
import { getURLRecipeId } from "../utils/url";
import BookmarksView from "../views/BookmarksView";

function renderBookmarksController(bookmarksData: Recipe[]) {
    // Set active recipe
    const activeRecipeId = getURLRecipeId();
    bookmarksData.forEach((bookmarkedData) => {
        bookmarkedData.isActive = activeRecipeId === bookmarkedData.id;
    });

    // Render bookmarks
    BookmarksView.renderBookmarks(bookmarksData);
}

export default renderBookmarksController;
