import type { Recipe } from "./recipeModule";

type BookmarksState = {
    bookmarks: Recipe[];
};

const bookmarksState: BookmarksState = {
    bookmarks: [],
};

function toggleBookmark(recipe: Recipe) {
    const existingRecipeIndex = bookmarksState.bookmarks.findIndex(
        ({ id }) => id === recipe.id
    );

    if (existingRecipeIndex !== -1) {
        const updatedBookmark = bookmarksState.bookmarks.toSpliced(
            existingRecipeIndex,
            1
        );

        bookmarksState.bookmarks = updatedBookmark;
    } else {
        bookmarksState.bookmarks.push(recipe);
    }

    setLocalBookmarks();
}

function setLocalBookmarks() {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksState.bookmarks));
}

function getLocalBookmarks(): Recipe[] | undefined {
    const localBookmarks = localStorage.getItem("bookmarks");
    if (localBookmarks) return JSON.parse(localBookmarks);
}

export { bookmarksState, toggleBookmark, getLocalBookmarks };
