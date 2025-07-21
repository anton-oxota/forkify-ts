import { bookmarksState, getLocalBookmarks } from "../modules/bookmarksModule";
import BookmarksView from "../views/BookmarksView";
import recipeController from "./recipeController";
import recipesListController from "./recipesListController";

export default async function pageLoadedController() {
    // Get url
    const url = new URL(window.location.href);

    const search = url.searchParams.get("search");
    const recipeId = url.searchParams.get("recipe");

    if (search) recipesListController(search, false);
    if (recipeId) recipeController(recipeId);

    // Get bookmarks from localStorage
    const localBookmarks = getLocalBookmarks();
    if (!localBookmarks) return;

    // Set bookmarks
    bookmarksState.bookmarks = localBookmarks;

    // Render bookmarks
    BookmarksView.renderBookmarks(bookmarksState.bookmarks);
}
