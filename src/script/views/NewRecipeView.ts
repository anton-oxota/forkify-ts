class NewRecipeView {
    private openNewRecipeButton = document.querySelector(
        ".nav__btn--add-recipe"
    ) as HTMLButtonElement;

    private closeNewRecipeButton = document.querySelector(
        ".btn--close-modal"
    ) as HTMLButtonElement;

    private newRecipeOverlay = document.querySelector(
        ".overlay"
    ) as HTMLDivElement;

    private newRecipeWindow = document.querySelector(
        ".add-recipe-window"
    ) as HTMLDivElement;

    public newRecipeForm = document.querySelector(".upload") as HTMLFormElement;

    constructor() {
        this.openNewRecipeButton.addEventListener(
            "click",
            this.openNewRecipe.bind(this)
        );

        this.closeNewRecipeButton.addEventListener(
            "click",
            this.closeNewRecipe.bind(this)
        );
    }

    private openNewRecipe() {
        this.newRecipeOverlay.classList.remove("hidden");
        this.newRecipeWindow.classList.remove("hidden");
    }

    private closeNewRecipe() {
        this.newRecipeOverlay.classList.add("hidden");
        this.newRecipeWindow.classList.add("hidden");
    }

    public addUploadRecipeHandler(handler: Function) {
        this.newRecipeForm.addEventListener("submit", (event) => {
            event.preventDefault();

            handler();
        });
    }
}

export default new NewRecipeView();
