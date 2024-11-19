import { useState, useEffect } from 'react';

export const useFetch = <T,>(url: string): { data: T | null; loading: boolean; error: string | null } => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGM2Zjg1MDM3Y2IyNWVhZWI3MzhkNGQ3NmM2YzM5NSIsIm5iZiI6MTczMTkzMzA0OC44MDI0MTI1LCJzdWIiOiI2NzM3NzA2ZjJlMmJiYzRmOGU0YTQzNTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pNVVGiCOBMg3UlaJeZOqAf7FesvsMkVnNAKYneT0zaQ'
                    },
                });
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

