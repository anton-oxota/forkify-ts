import { BASE_URL, getData } from "../utils/getData";

export type RecipeListData = {
    publisher: string;
    image_url: string;
    title: string;
    id: string;
};

type RecipeResults = {
    status: "success" | "error";
    results: number;
    data: {
        recipes: RecipeListData[];
    };
};

type SearchResultsState = {
    recipes: RecipeListData[] | null;
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
