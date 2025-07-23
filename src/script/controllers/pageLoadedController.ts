import { bookmarksState, getLocalBookmarks } from "../modules/bookmarksModule";
import recipeController from "./recipeController";
import recipesListController from "./recipesListController";
import renderBookmarksController from "./renderBookmarksController";

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
    renderBookmarksController(localBookmarks);
}
