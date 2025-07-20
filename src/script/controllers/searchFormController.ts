import SearchResultsView from "../views/SearchResultsView";
import recipesListController from "./recipesListController";

export default async function searchResultsController() {
    const searchForm = SearchResultsView.searchForm;

    searchForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const searchInput = searchForm.searchInput as HTMLInputElement;
        const searchValue = searchInput.value.trim();

        if (!searchValue) return;

        recipesListController(searchValue);
    });
}
