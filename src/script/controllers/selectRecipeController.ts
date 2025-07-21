import { bookmarksState } from "../modules/bookmarksModule";
import { searchResultsState } from "../modules/searchResultModule";
import BookmarksView from "../views/BookmarksView";
import SearchResultsView from "../views/SearchResultsView";
import recipeController from "./recipeController";

export default function selectRecipeController() {
    const recipeListContainer = SearchResultsView.recipesListContainer;
    const bookmarksContainer = BookmarksView.bookmarksContainer;

    // Selecting recipe for recipeListContainer and bookmarksContainer
    [recipeListContainer, bookmarksContainer].forEach((container) => {
        container.addEventListener("click", (event) => {
            // Select element
            const target = event.target as HTMLDivElement;
            const recipeLinkElement = target?.closest(
                ".preview__link"
            ) as HTMLAnchorElement | null;

            // Get recipe ID
            const recipeId = recipeLinkElement?.dataset.id;
            if (!recipeId) return;

            // Set URL
            const url = new URL(window.location.href);
            url.searchParams.set("recipe", recipeId);
            history.replaceState(null, "", url.href);

            // Render recipe by ID
            recipeController(recipeId);

            // Render active recipe in bookmark and result's list
            const { recipes } = searchResultsState;
            if (recipes) SearchResultsView.renderResults(recipes);

            const { bookmarks } = bookmarksState;
            if (bookmarks) BookmarksView.renderBookmarks(bookmarks);
        });
    });
}
