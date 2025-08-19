import { API_KEY, BASE_URL, postData } from "../utils/http";
import type { Recipe } from "./recipeModule";

type UploadRecipe = Omit<Recipe, "isActive" | "id" | "isBookmarked"> | null;

type UploadRecipeState = {
    recipe: UploadRecipe;
};

const uploadRecipeState: UploadRecipeState = {
    recipe: null,
};

function createUploadRecipeData(form: HTMLFormElement) {
    const recipeData: UploadRecipe = {
        title: form.recipeTitle.value,
        source_url: form.sourceUrl.value,
        image_url: form.image.value,
        publisher: form.publisher.value,
        cooking_time: form.cookingTime.value,
        servings: form.servings.value,
        ingredients: [],
    };

    return recipeData;
}

async function uploadRecipe(data: UploadRecipe) {
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
