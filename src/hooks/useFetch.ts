import { useEffect, useState } from "react";

const useFetch = <T = unknown>(url: string) => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [data, setData] = useState<T | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(url);
            if (!res.ok) {
                setErrorMsg(`HTTP Error Status: ${res.status}`);
                return;
            }
            const resJson = await res.json();
            setData(resJson.data); // assuming `resJson.data` contains the payload based on Forkify's API
        } catch (error) {
            setErrorMsg(error instanceof Error ? error.message : 'Unknown Error...');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { loading, errorMsg, data };
};

export default useFetch;