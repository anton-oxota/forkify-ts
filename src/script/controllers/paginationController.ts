import { paginationState } from "../modules/paginationModel";
import PaginationView from "../views/PaginationView";
import SearchResultsView from "../views/SearchResultsView";

function paginationController(page: number) {
    const { data, totalPages } = paginationState;

    // Set current page
    paginationState.currentPage = page;

    // Render recipe results
    SearchResultsView.renderResults(data[page - 1]);

    // Render pagination buttons
    PaginationView.renderPageButtons(page, totalPages);
}

export default paginationController;
