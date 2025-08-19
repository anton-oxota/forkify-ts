import {
    paginationState,
    RECIPES_PER_PAGE,
    splitData,
} from "../modules/paginationModel";
import {
    searchResultsState,
    type RecipeListData,
} from "../modules/searchResultModule";
import { getURLRecipeId } from "../utils/url";
import PaginationView from "../views/PaginationView";
import SearchResultsView from "../views/SearchResultsView";

function renderResultsController(recipesData: RecipeListData[]) {
    // Set active recipe
    const recipeId = getURLRecipeId();
    recipesData.forEach((recipeData) => {
        recipeData.isActive = recipeId === recipeData.id;
    });

    // Pagination
    splitData(recipesData, RECIPES_PER_PAGE);
    const { data, currentPage, totalPages } = paginationState;
    const { recipes } = searchResultsState;

    // Render results
    SearchResultsView.renderResults(data[currentPage - 1]);

    // Render pagination buttons
    if (recipes && recipes.length >= RECIPES_PER_PAGE)
        PaginationView.renderPageButtons(currentPage, totalPages);
}

export default renderResultsController;
