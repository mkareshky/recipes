import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrprMsg] = useState('');
    const [data, setData] = useState([]);

    const handleFetch = async () => {

        try {
            const res = await fetch(url);
            if (!res.ok) setErrprMsg(`HTTP Error Status: ${res.status}`);
            const resJson = await res.json();
            console.log({ resJson });
            setData(resJson);
        } catch (error) {
            (error instanceof Error) ? setErrprMsg(error.message) : 'Unknown Error...'
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleFetch();
    }, []);

    return { loading, errorMsg, data };
}

export default useFetch;