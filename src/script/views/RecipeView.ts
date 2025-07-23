import type { Recipe } from "../modules/recipeModule";
import Components from "./Components";

class RecipeView {
    private recipeContainer = document.querySelector(
        ".recipe"
    ) as HTMLDivElement;

    private createRecipeFigureElement({ title, image_url }: Recipe) {
        return `
            <figure class="recipe__fig">
                <img src="${image_url}" alt="${title}" class="recipe__img" />
                <h1 class="recipe__title">
                    <span>${title}</span>
                </h1>
            </figure>
        `;
    }

    private createRecipeDetailsElement({
        cooking_time,
        servings,
        isBookmarked,
    }: Recipe) {
        return `
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="imgs/icons.svg#icon-clock"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">${cooking_time}</span>
                    <span class="recipe__info-text">minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="imgs/icons.svg#icon-users"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">${servings}</span>
                    <span class="recipe__info-text">servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn--tiny btn--increase-servings">
                            <svg>
                                <use href="imgs/icons.svg#icon-minus-circle"></use>
                            </svg>
                        </button>
                        <button class="btn--tiny btn--increase-servings">
                            <svg>
                                <use href="imgs/icons.svg#icon-plus-circle"></use>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="recipe__user-generated">
                    <svg>
                        <use href="imgs/icons.svg#icon-user"></use>
                    </svg>
                </div>
                <button class="btn--round btn-bookmark">
                    <svg class="">
                        <use href="imgs/icons.svg#icon-bookmark${
                            isBookmarked ? "-fill" : ""
                        }"></use>
                    </svg>
                </button>
            </div>
        `;
    }

    private createRecipeIngredients({ ingredients }: Recipe) {
        const ingredientsList = ingredients
            .map((ingredient) => {
                const { description, quantity, unit } = ingredient;

                return `
                <li class="recipe__ingredient">
                    <svg class="recipe__icon">
                        <use href="imgs/icons.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__quantity">${quantity}</div>
                    <div class="recipe__description">
                        <span class="recipe__unit">${unit}</span>
                        ${description}
                    </div>
                </li>
            `;
            })
            .join("");

        return `
            <div class="recipe__ingredients">
                <h2 class="heading--2">Recipe ingredients</h2>
                <ul class="recipe__ingredient-list">
                    ${ingredientsList}
                </ul>
            </div>
        `;
    }

    private createRecipeElement(recipeData: Recipe) {
        return `
            ${this.createRecipeFigureElement(recipeData)}
            ${this.createRecipeDetailsElement(recipeData)}
            ${this.createRecipeIngredients(recipeData)}
        `;
    }

    public renderRecipe(recipeData: Recipe) {
        this.recipeContainer.innerHTML = this.createRecipeElement(recipeData);
    }

    public renderLoading() {
        this.recipeContainer.innerHTML = Components.spinner();
    }

    public renderError(errorMessage: string) {
        this.recipeContainer.innerHTML = Components.error(errorMessage);
    }

    public addBookmarkHandler(handler: Function) {
        this.recipeContainer.addEventListener("click", (event) => {
            if (!event.target) return;

            const target = event.target as Element;

            // Targeting bookmark button
            if (!target.closest(".btn-bookmark")) return;

            handler();
        });
    }
}

export default new RecipeView();
