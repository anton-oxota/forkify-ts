import { recipeState } from "../modules/recipeModule";
import RecipeView from "../views/RecipeView";

function servingsController(servings: number) {
    const { recipe } = recipeState;
    if (!recipe) return;

    // Change ingredients quantity
    recipe.ingredients.forEach((ingredient) => {
        if (ingredient.quantity) {
            console.log(ingredient.quantity, recipe.servings, servings);
            console.log((ingredient.quantity / recipe.servings) * servings);

            ingredient.quantity =
                (ingredient.quantity / recipe.servings) * servings;
        }
    });

    // Change servings
    recipe.servings = servings;

    // Rerender Recipe Details
    console.log(servings);
    RecipeView.renderRecipeDetails(recipe);

    // Rerender Recipe Ingredients
    RecipeView.renderRecipeIngredients(recipe);
}

export default servingsController;
