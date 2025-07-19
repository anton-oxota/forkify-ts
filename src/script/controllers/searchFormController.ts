import SearchResultsView from "../views/SearchResultsView";
import recepiesListController from "./recepiesListController";

export default async function searchResultsController() {
    const searchForm = SearchResultsView.searchForm;

    searchForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const searchInput = searchForm.searchInput as HTMLInputElement;
        const searchValue = searchInput.value.trim();

        if (!searchValue) return;

        recepiesListController(searchValue);
    });
}
