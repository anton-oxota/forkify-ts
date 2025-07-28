import "../css/main.css";
import bookmarksController from "./controllers/bookmarksController";
import pageLoadedController from "./controllers/pageLoadedController";
import paginationController from "./controllers/paginationController";
import searchResultsController from "./controllers/searchFormController";
import selectRecipeController from "./controllers/selectRecipeController";
import servingsController from "./controllers/servingsController";
import PaginationView from "./views/PaginationView";
import RecipeView from "./views/RecipeView";
import SearchResultsView from "./views/SearchResultsView";

function init() {
    pageLoadedController();
    selectRecipeController();
    SearchResultsView.addSubmitHandler(searchResultsController);
    RecipeView.addBookmarkHandler(bookmarksController);
    RecipeView.addChangeServingsHandler(servingsController);
    PaginationView.addPageClickHandler(paginationController);
}

init();
