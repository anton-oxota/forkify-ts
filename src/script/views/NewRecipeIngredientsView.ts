class NewRecipeIngredientsView {
    private ingredientsContainer = document.querySelector(
        ".ingredients-wrapper"
    ) as HTMLDivElement;

    private newIngredientButton = document.querySelector(
        ".add-ingredient"
    ) as HTMLButtonElement;

    private createIngredientItemElement(
        value: string,
        ingredientNumber: number
    ) {
        return `
            <div class="ingredient-item">
                <label>Ingredient ${ingredientNumber + 1}</label>
                <input
                    data-ingredient="${ingredientNumber}"
                    type="text"
                    value="${value}"
                    required
                    name="ingredient-${ingredientNumber}"
                    placeholder="Format: 'Quantity,Unit,Description'"
                />
                <button data-remove-ingredient="${ingredientNumber}" type="button" class="btn remove-ingredient">X</button>
            </div>
        `;
    }

    public renderIngredients(ingredientValues: string[]) {
        this.ingredientsContainer.innerHTML = "";

        ingredientValues.forEach((value, index) => {
            this.ingredientsContainer.insertAdjacentHTML(
                "beforeend",
                this.createIngredientItemElement(value, index)
            );
        });
    }

    public addChangeRecipeIngredientHandler(handler: Function) {
        this.ingredientsContainer.addEventListener("focusout", (event) => {
            console.log("blur");

            const target = event.target as Element;
            const input = target.closest("input") as HTMLInputElement;
            if (!input) return;

            handler(input);
        });
    }

    public addNewIngredientHandler(handler: Function) {
        this.newIngredientButton.addEventListener("click", () => {
            handler();
        });
    }

    public addRemoveIngredientHandler(handler: Function) {
        this.ingredientsContainer.addEventListener("click", (event) => {
            const target = event.target as Element;
            const button = target.closest(
                ".remove-ingredient"
            ) as HTMLButtonElement;

            if (!button) return;

            const deleteRecipeIndex = button.dataset.removeIngredient;

            handler(deleteRecipeIndex);
        });
    }
}

export default new NewRecipeIngredientsView();
