import { useState } from "react";

const useFetch = () => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrprMsg] = useState('');
    const [data, setData] = useState([]);

    const fetchData = async (url: string) => {
        setLoading(true);
        try {
            const res = await fetch(url);
            if (!res.ok) setErrprMsg(`HTTP Error Status: ${res.status}`);
            const resJson = await res.json();
            setData(resJson);
        } catch (error) {
            (error instanceof Error) ? setErrprMsg(error.message) : 'Unknown Error...';
        } finally {
            setLoading(false);
        }
    };

    return { loading, errorMsg, data, fetchData };
};


export default useFetch;