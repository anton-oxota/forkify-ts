import "../css/main.css";
import bookmarksController from "./controllers/bookmarksController";
import pageLoadedController from "./controllers/pageLoadedController";
import searchResultsController from "./controllers/searchFormController";
import selectRecipeController from "./controllers/selectRecipeController";
import RecipeView from "./views/RecipeView";
import SearchResultsView from "./views/SearchResultsView";

function init() {
    pageLoadedController();
    selectRecipeController();
    SearchResultsView.addSubmitHandler(searchResultsController);
    RecipeView.addBookmarkHandler(bookmarksController);
}

init();
