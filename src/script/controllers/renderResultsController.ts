import type { RecipeListData } from "../modules/searchResultModule";
import { getURLRecipeId } from "../utils/url";
import SearchResultsView from "../views/SearchResultsView";

function renderResultsController(
    recipes: RecipeListData[],
    isClearRecipeContainer = false
) {
    const recipeId = getURLRecipeId();
    recipes.forEach((recipeData) => {
        recipeData.isActive = recipeId === recipeData.id;
    });

    SearchResultsView.renderResults(recipes, isClearRecipeContainer);
}

export default renderResultsController;
