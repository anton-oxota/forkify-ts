import { BASE_URL, getData } from "../utils/http";

export type Recipe = {
    publisher: string;
    ingredients: RecipeIngredient[];
    source_url: string;
    image_url: string;
    title: string;
    servings: number;
    cooking_time: number;
    id: string;
    isBookmarked?: boolean;
    isActive?: boolean;
    key?: string;
};

export type RecipeIngredient = {
    quantity: number | null;
    unit: string | null;
    description: string | null;
};

type RecipeState = {
    recipe: Recipe | null;
};

const recipeState: RecipeState = {
    recipe: null,
};

type RecipeFetch = {
    status: string;
    data: {
        recipe: Recipe;
    };
};

async function getRecipeById(id: string) {
    // Reset recipe
    recipeState.recipe = null;

    try {
        // Fetch recipe
        const data = await getData<RecipeFetch>(
            `${BASE_URL}/${id}`,
            "Sorry, can not get recipe"
        );

        // Set recipe
        recipeState.recipe = data.data.recipe;
    } catch (error) {
        throw error;
    }
}

export { recipeState, getRecipeById };
