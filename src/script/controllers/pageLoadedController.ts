import recepiesListController from "./recepiesListController";

export default async function pageLoadedController() {
    // Get url
    const url = new URL(window.location.href);

    const search = url.searchParams.get("search");

    if (search) {
        recepiesListController(search);
    }
}
