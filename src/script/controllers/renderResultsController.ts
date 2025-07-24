import { paginationState, splitData } from "../modules/paginationModel";
import type { RecipeListData } from "../modules/searchResultModule";
import { getURLRecipeId } from "../utils/url";
import PaginationView from "../views/PaginationView";
import SearchResultsView from "../views/SearchResultsView";

function renderResultsController(recipes: RecipeListData[]) {
    const recipeId = getURLRecipeId();
    recipes.forEach((recipeData) => {
        recipeData.isActive = recipeId === recipeData.id;
    });

    // Pagination
    splitData(recipes, 10);
    const { data, currentPage, totalPages } = paginationState;

    SearchResultsView.renderResults(data[currentPage - 1]);
    PaginationView.renderPageButtons(currentPage, totalPages);
}

export default renderResultsController;
