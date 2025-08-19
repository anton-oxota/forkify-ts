export const BASE_URL = "https://forkify-api.jonas.io/api/v2/recipes";
export const API_KEY = "1aafca0f-d083-4c3f-8d42-1aec13cceab9";

export async function getData<U>(
    url: string,
    errorMessage: string = "Can not get some data"
): Promise<U> {
    const response = await fetch(url);

    if (!response.ok) throw new Error(errorMessage);

    return await response.json();
}

export async function postData<U>(url: string, data: U, errorMessage: string) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
        },
    });

    if (!response.ok) throw new Error(errorMessage);

    return await response.json();
}
