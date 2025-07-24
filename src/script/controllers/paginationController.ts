import { paginationState } from "../modules/paginationModel";
import PaginationView from "../views/PaginationView";
import SearchResultsView from "../views/SearchResultsView";

function paginationController(page: number) {
    const { data, totalPages } = paginationState;

    paginationState.currentPage = page;

    SearchResultsView.renderResults(data[page - 1]);
    PaginationView.renderPageButtons(page, totalPages);
}

export default paginationController;
