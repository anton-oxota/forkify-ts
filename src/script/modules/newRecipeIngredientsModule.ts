type NewRecipeIngredientsState = {
    ingredientValues: string[];
};

const newRecipeIngredientsState: NewRecipeIngredientsState = {
    ingredientValues: [""],
};

function deleteRecipeIngredient(deleteRecipeIndex: number) {
    newRecipeIngredientsState.ingredientValues.splice(deleteRecipeIndex, 1);
}

export { newRecipeIngredientsState, deleteRecipeIngredient };
