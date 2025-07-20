import { BASE_URL, getData } from "../utils/getData";

export type Recipe = {
    publisher: string;
    ingredients: RecipeIngredient[];
    source_url: string;
    image_url: string;
    title: string;
    servings: number;
    cooking_time: number;
    id: string;
};

type RecipeIngredient = {
    quantity: number;
    unit: string;
    description: string;
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
    try {
        const data = await getData<RecipeFetch>(
            `${BASE_URL}/${id}`,
            "Sorry, can not get recipe"
        );
        recipeState.recipe = data.data.recipe;
    } catch (error) {
        throw error;
    }
}

export { recipeState, getRecipeById };
