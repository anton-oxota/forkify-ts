import "../css/main.css";
import bookmarksController from "./controllers/bookmarksController";
import pageLoadedController from "./controllers/pageLoadedController";
import searchResultsController from "./controllers/searchFormController";
import selectRecipeController from "./controllers/selectRecipeController";

function init() {
    pageLoadedController();
    selectRecipeController();
    searchResultsController();
    bookmarksController();
}

init();
