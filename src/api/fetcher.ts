import { handleError } from "./error-handler";

type FetchOptions = {
    method?: string;
    body?: any;
    headers?: Record<string, string>;
};

/**Fetcher */
export const fetcher = async (url: string, options: FetchOptions = {}) => {
    const response = await fetch(url, {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
        return handleError(response);
    }

    return response.json();
};