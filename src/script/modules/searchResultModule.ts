async function getData<U>(
    url: string,
    errorMessage: string = "Can not get some data"
): Promise<U> {
    const response = await fetch(url);

    if (!response.ok) throw new Error(errorMessage);

    return await response.json();
}
const BASE_URL = "https://forkify-api.jonas.io/api/v2/recipes";

export type Recipe = {
    publisher: string;
    image_url: string;
    title: string;
    id: string;
};

type RecipeResults = {
    status: "success" | "error";
    results: number;
    data: {
        recipes: Recipe[];
    };
};

type SearchResultsState = {
    recipes: Recipe[] | null;
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
};

const searchResultsState: SearchResultsState = {
    recipes: null,
    isLoading: false,
    isError: false,
    errorMessage: null,
};

async function getRecipesByName(name: string) {
    try {
        const data = await getData<RecipeResults>(
            `${BASE_URL}?search=${name}`,
            `Sorry, something went wrong`
        );
        searchResultsState.recipes = data.data.recipes;
        return data;
    } catch (error) {
        throw error;
    }
}

export { searchResultsState, getRecipesByName };
