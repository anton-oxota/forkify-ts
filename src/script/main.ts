import "../css/main.css";
import pageLoadedController from "./controllers/pageLoadedController";
import searchResultsController from "./controllers/searchFormController";

function init() {
    pageLoadedController();
    searchResultsController();
}

init();
