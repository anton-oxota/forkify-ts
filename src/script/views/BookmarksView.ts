import type { Recipe } from "../modules/recipeModule";
import Components from "./Components";

class BookmarksView {
    public bookmarksContainer = document.querySelector(
        ".bookmarks__list"
    ) as HTMLDivElement;

    public renderBookmarks(bookmarksData: Recipe[]) {
        // Clear container
        this.bookmarksContainer.innerHTML = "";

        if (!bookmarksData.length) {
            this.bookmarksContainer.innerHTML = Components.message(
                "No bookmarks yet. Find a nice recipe and bookmark it :)"
            );
            return;
        }

        bookmarksData.forEach((bookmarkData) => {
            this.bookmarksContainer.insertAdjacentHTML(
                "beforeend",
                Components.createResipeListElement(bookmarkData)
            );
        });
    }
}

export default new BookmarksView();
