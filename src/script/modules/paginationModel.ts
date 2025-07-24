import type { RecipeListData } from "./searchResultModule";

type PaginationState<T> = {
    currentPage: number;
    totalPages: number;
    data: T[][];
};

const paginationState: PaginationState<RecipeListData> = {
    currentPage: 1,
    totalPages: 1,
    data: [],
};

function splitData(data: RecipeListData[], quantity: number) {
    const copy = structuredClone(data);
    const totalPages = Math.ceil(data.length / quantity);
    paginationState.totalPages = totalPages;

    const transformedArray = [];

    for (let i = 0; i < totalPages; i++) {
        transformedArray.push(copy.splice(0, quantity));
    }

    paginationState.data = transformedArray;
}

export { paginationState, splitData };
