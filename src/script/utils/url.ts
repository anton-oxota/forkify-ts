function getURLRecipeId() {
    const url = new URL(window.location.href);
    return url.searchParams.get("recipe");
}

export { getURLRecipeId };
