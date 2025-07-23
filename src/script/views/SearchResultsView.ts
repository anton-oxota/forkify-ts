// import icons from "imgs/icons.svg";
import Components from "./Components";
import type { RecipeListData } from "../modules/searchResultModule";

class SearchResultsView {
    public recipesListContainer = document.querySelector(
        ".results"
    ) as HTMLDivElement;

    private recipeContainer = document.querySelector(
        ".recipe"
    ) as HTMLDivElement;

    public searchForm = document.querySelector(".search") as HTMLFormElement;

    public renderResults(
        data: RecipeListData[],
        isClearRecipeContainer = true
    ) {
        // Clear containers
        this.recipesListContainer.innerHTML = "";

        if (isClearRecipeContainer) this.clearRecipeContainer();

        if (!data.length)
            this.recipeContainer.innerHTML = Components.error(
                "No recipes found for your query. Please try again!"
            );

        // Render Recipes
        data.forEach((recipe) => {
            this.recipesListContainer?.insertAdjacentHTML(
                "beforeend",
                Components.createResipeListElement(recipe)
            );
        });
    }

    private clearRecipeContainer() {
        if (
            this.recipeContainer.querySelector(".message") ||
            this.recipeContainer.querySelector(".error")
        ) {
            this.recipeContainer.innerHTML = "";
        }
    }

    public renderLoading(container = this.recipesListContainer) {
        container.innerHTML = "";
        container.innerHTML = Components.spinner();
        this.clearRecipeContainer();
    }

    public renderError(errorMessage: string, container = this.recipeContainer) {
        this.recipesListContainer.innerHTML = "";
        container.innerHTML = "";
        container.innerHTML = Components.error(errorMessage);
    }
}

export default new SearchResultsView();
