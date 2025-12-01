interface FetcherOptions extends RequestInit {
    cache?: RequestCache;
    next?: {
        revalidate?: number;
        tags?: string[];
    };
}

export async function serverDataFetcher<T = unknown>(
    endpoint: string,
    options: FetcherOptions = {}
): Promise<T> {
    try {
        const res = await fetch(endpoint, {
            method: options.method || "GET",
            headers: {
                "content-type": "application/json",
                ...(options.headers || {})
            },
            next: { revalidate: 60 },
            ...options
        });

        if (!res.ok) {
            throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
        }

        const data: T = await res.json();
        return data;

    } catch (err: any) {
        console.error("Server Fetch Error:", err.message);
        throw err;
    }
}
