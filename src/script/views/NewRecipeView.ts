import Components from "./Components";

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
    private formActionContainer = this.newRecipeForm.querySelector(
        ".action"
    ) as HTMLDivElement;

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

    private createSubmitButton() {
        return `
            <button class="btn upload__btn">
                <svg>
                    <use href="imgs/icons.svg#icon-upload-cloud"></use>
                </svg>
                <span>Upload</span>
            </button>
        `;
    }

    private openNewRecipe() {
        this.newRecipeOverlay.classList.remove("hidden");
        this.newRecipeWindow.classList.remove("hidden");
    }

    private closeNewRecipe() {
        this.newRecipeOverlay.classList.add("hidden");
        this.newRecipeWindow.classList.add("hidden");
    }

    public renderMessage(message: string) {
        this.formActionContainer.innerHTML = message;
    }

    public renderError(errorMessage: string) {
        this.formActionContainer.innerHTML = errorMessage;
    }

    public renderSubmitButton() {
        this.formActionContainer.innerHTML = this.createSubmitButton();
    }

    public addUploadRecipeHandler(handler: Function) {
        this.newRecipeForm.addEventListener("submit", (event) => {
            event.preventDefault();

            handler();
        });
    }
}

export default new NewRecipeView();
