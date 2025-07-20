import recipeController from "./recipeController";
import recipesListController from "./recipesListController";

export default async function pageLoadedController() {
    // Get url
    const url = new URL(window.location.href);

    const search = url.searchParams.get("search");
    const recipeId = url.searchParams.get("recipe");

    if (search) recipesListController(search, false);
    if (recipeId) recipeController(recipeId);
}
