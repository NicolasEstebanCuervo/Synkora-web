export async function apiFetch<T>(
    input: RequestInfo,
    init?: RequestInit,
    timeout = 10000
): Promise<T> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(input, {
            ...init,
            signal: controller.signal,
        });

        clearTimeout(id);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const text = await response.text();
        if (!text) {
            return {} as T;
        }

        return JSON.parse(text) as T;
    } catch (error) {
        if (
            typeof error === "object" &&
            error !== null &&
            "name" in error &&
            (error as { name?: string }).name === "AbortError"
        ) {
            throw new Error("Request timed out or was cancelled");
        }
        throw error;
    } finally {
        clearTimeout(id);
    }
}
