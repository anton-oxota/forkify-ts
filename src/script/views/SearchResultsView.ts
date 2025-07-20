// import icons from "imgs/icons.svg";
import Components from "./Components";
import type { RecipeListData } from "../modules/searchResultModule";
import { getURLRecipeId } from "../utils/url";

class SearchResultsView {
    public recipesListContainer = document.querySelector(
        ".results"
    ) as HTMLDivElement;

    private recipeContainer = document.querySelector(
        ".recipe"
    ) as HTMLDivElement;

    public searchForm = document.querySelector(".search") as HTMLFormElement;

    private createResipeListElement(data: RecipeListData, isActive: boolean) {
        const { id, image_url, publisher, title } = data;

        return `
            <li class="preview">
                <a class="preview__link 
                 ${isActive ? "preview__link--active" : ""}
                 " data-id="${id}">
                    <figure class="preview__fig">
                        <img src="${image_url}" alt="Test" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${title}</h4>
                        <p class="preview__publisher">${publisher}</p>
                    </div>
                </a>
            </li>
        `;
    }

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

        // Get Recipe Id
        const recipeId = getURLRecipeId();

        // Render Recipes
        data.forEach((recipe) => {
            this.recipesListContainer?.insertAdjacentHTML(
                "beforeend",
                this.createResipeListElement(recipe, recipe.id === recipeId)
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
