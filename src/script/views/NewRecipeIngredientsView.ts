class NewRecipeIngredientsView {
    private ingredientsContainer = document.querySelector(
        ".ingredients-wrapper"
    ) as HTMLDivElement;

    private newIngredientButton = document.querySelector(
        ".add-ingredient"
    ) as HTMLButtonElement;

    private createIngredientItemElement(ingredientNumber: number) {
        return `
            <div class="ingredient-item">
                <label>Ingredient ${ingredientNumber}</label>
                <input
                    data-ingredient="${ingredientNumber}"
                    type="text"
                    required
                    name="ingredient-${ingredientNumber}"
                    placeholder="Format: 'Quantity,Unit,Description'"
                />
                <button type="button" class="btn remove-ingredient">X</button>
            </div>
        `;
    }

    public renderIngredients(ingredientsQuantity: number) {
        this.ingredientsContainer.innerHTML = "";

        for (let i = 0; i < ingredientsQuantity; i++) {
            this.ingredientsContainer.insertAdjacentHTML(
                "beforeend",
                this.createIngredientItemElement(i + 1)
            );
        }
    }

    public addNewIngredientHandler(handler: Function) {
        this.newIngredientButton.addEventListener("click", () => {
            handler();
        });
    }

    public addRemoveIngredientHandler(handler: Function) {
        this.ingredientsContainer.addEventListener("click", (event) => {
            const target = event.target as Element;
            if (target.closest(".remove-ingredient")) {
                console.log("remove");
                handler();
            }
        });
    }
}

export default new NewRecipeIngredientsView();
