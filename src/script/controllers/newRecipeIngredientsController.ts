import {
    deleteRecipeIngredient,
    newRecipeIngredientsState,
} from "../modules/newRecipeIngredientsModule";
import NewRecipeIngredientsView from "../views/NewRecipeIngredientsView";

function newRecipeIngredientsController() {
    let { ingredientValues } = newRecipeIngredientsState;

    NewRecipeIngredientsView.renderIngredients(ingredientValues);

    NewRecipeIngredientsView.addChangeRecipeIngredientHandler(
        (input: HTMLInputElement) => {
            const ingredientIndex = input.dataset.ingredient!;
            const value = input.value;

            newRecipeIngredientsState.ingredientValues[+ingredientIndex] =
                value;
        }
    );

    NewRecipeIngredientsView.addNewIngredientHandler(() => {
        ingredientValues.push("");
        NewRecipeIngredientsView.renderIngredients(ingredientValues);
    });

    NewRecipeIngredientsView.addRemoveIngredientHandler(
        (deleteRecipeIndex: string) => {
            deleteRecipeIngredient(+deleteRecipeIndex);
            NewRecipeIngredientsView.renderIngredients(ingredientValues);
        }
    );
}

export default newRecipeIngredientsController;
