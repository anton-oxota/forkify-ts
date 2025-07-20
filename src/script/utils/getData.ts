export const BASE_URL = "https://forkify-api.jonas.io/api/v2/recipes";

export async function getData<U>(
    url: string,
    errorMessage: string = "Can not get some data"
): Promise<U> {
    const response = await fetch(url);

    if (!response.ok) throw new Error(errorMessage);

    return await response.json();
}
