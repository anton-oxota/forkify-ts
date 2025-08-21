import "../css/main.css";
import bookmarksController from "./controllers/bookmarksController";
import pageLoadedController from "./controllers/pageLoadedController";
import paginationController from "./controllers/paginationController";
import searchResultsController from "./controllers/searchFormController";
import selectRecipeController from "./controllers/selectRecipeController";
import servingsController from "./controllers/servingsController";
import uploadRecipeController from "./controllers/uploadRecipeController";

import PaginationView from "./views/PaginationView";
import RecipeView from "./views/RecipeView";
import SearchResultsView from "./views/SearchResultsView";
import NewRecipeView from "./views/NewRecipeView";
import newRecipeIngredientsController from "./controllers/newRecipeIngredientsController";

function init() {
    pageLoadedController();
    selectRecipeController();
    SearchResultsView.addSubmitHandler(searchResultsController);
    RecipeView.addBookmarkHandler(bookmarksController);
    RecipeView.addChangeServingsHandler(servingsController);
    PaginationView.addPageClickHandler(paginationController);
    NewRecipeView.addUploadRecipeHandler(uploadRecipeController);
    newRecipeIngredientsController();
}

init();
