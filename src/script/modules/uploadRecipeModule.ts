import { API_KEY, BASE_URL, postData } from "../utils/http";
import type { Recipe, RecipeIngredient } from "./recipeModule";

type UploadRecipe = Omit<Recipe, "isActive" | "id" | "isBookmarked"> | null;

type UploadRecipeState = {
    recipe: UploadRecipe;
};

const uploadRecipeState: UploadRecipeState = {
    recipe: null,
};

function createUploadERcipeIngredients(form: HTMLFormElement) {
    const ingredientInputs = form.querySelectorAll("input[name^=ingredient]");

    let ingredients: RecipeIngredient[] = [];

    Array.from(ingredientInputs).forEach((ingredient) => {
        const ingredientInput = ingredient as HTMLInputElement;

        const [quantity = null, unit = null, description = null] =
            ingredientInput.value.split(",");

        ingredients.push({
            quantity: quantity ? +quantity : null,
            unit,
            description,
        });
    });

    return ingredients;
}

function createUploadRecipeData(form: HTMLFormElement) {
    const recipeData: UploadRecipe = {
        title: form.recipeTitle.value,
        source_url: form.sourceUrl.value,
        image_url: form.image.value,
        publisher: form.publisher.value,
        cooking_time: form.cookingTime.value,
        servings: form.servings.value,
        ingredients: createUploadERcipeIngredients(form),
    };

    return recipeData;
}

type UploadRecipeResponse = {
    status: "string";
    data: {
        recipe: Recipe;
    };
};

async function uploadRecipe(data: UploadRecipe): Promise<UploadRecipeResponse> {
    try {
        const result = await postData(
            `${BASE_URL}?key=${API_KEY}`,
            data,
            "Can not upload your recipe"
        );

        return result;
    } catch (error) {
        throw error;
    }
}

export { uploadRecipeState, uploadRecipe, createUploadRecipeData };
