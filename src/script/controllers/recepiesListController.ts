import {
    getRecipesByName,
    searchResultsState,
} from "../modules/searchResultModule";
import SearchResultsView from "../views/SearchResultsView";

export default async function recepiesListController(searchValue: string) {
    try {
        // Loading
        SearchResultsView.renderLoading();

        // Fetching
        await getRecipesByName(searchValue);

        const { recipes } = searchResultsState;

        if (recipes) {
            // Rendering
            SearchResultsView.renderResults(recipes);

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
