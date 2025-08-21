import { newRecipeIngredientsState } from "../modules/newRecipeIngredientsModule";
import NewRecipeIngredientsView from "../views/NewRecipeIngredientsView";

function newRecipeIngredientsController() {
    let { ingredientsQuantity } = newRecipeIngredientsState;
    console.log(ingredientsQuantity);

    NewRecipeIngredientsView.renderIngredients(ingredientsQuantity);

    NewRecipeIngredientsView.addNewIngredientHandler(() => {
        ingredientsQuantity++;
        NewRecipeIngredientsView.renderIngredients(ingredientsQuantity);
    });

    NewRecipeIngredientsView.addRemoveIngredientHandler(() => {
        if (ingredientsQuantity === 1) return;
        ingredientsQuantity--;
        NewRecipeIngredientsView.renderIngredients(ingredientsQuantity);
    });
}

export default newRecipeIngredientsController;
