import { searchResultsState } from "../modules/searchResultModule";
import SearchResultsView from "../views/SearchResultsView";
import recipeController from "./recipeController";

export default function selectRecipeController() {
    const recipeListContainer = SearchResultsView.recipesListContainer;

    recipeListContainer.addEventListener("click", (event) => {
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

        // Render active recipe
        const { recipes } = searchResultsState;
        if (recipes) SearchResultsView.renderResults(recipes);
    });
}
