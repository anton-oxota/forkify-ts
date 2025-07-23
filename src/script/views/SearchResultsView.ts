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

    public renderResults(data: RecipeListData[]) {
        // Clear containers
        this.recipesListContainer.innerHTML = "";

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

    public addSubmitHandler(handler: Function) {
        this.searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            handler();
        });
    }
}

export default new SearchResultsView();
