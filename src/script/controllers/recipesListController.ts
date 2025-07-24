import {
    getRecipesByName,
    searchResultsState,
} from "../modules/searchResultModule";
import SearchResultsView from "../views/SearchResultsView";
import renderResultsController from "./renderResultsController";

export default async function recipesListController(searchValue: string) {
    try {
        // Loading
        SearchResultsView.renderLoading();

        // Fetching
        await getRecipesByName(searchValue);

        const { recipes } = searchResultsState;

        if (!recipes?.length) {
            throw new Error(
                "No recipes found for your query. Please try again!"
            );
        }

        if (recipes) {
            // Rendering
            renderResultsController(recipes);

            // Create URL
            const url = new URL(window.location.href);
            url.searchParams.set("search", searchValue);

            // Set Query
            history.replaceState(null, "", url.href);
        }
    } catch (error) {
        // Render Error
        if (error instanceof Error) {
            SearchResultsView.renderError(error.message);
        }
    }
}
