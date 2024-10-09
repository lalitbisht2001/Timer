import axios from "axios";
import { useEffect, useState } from "react";

const FetchAPI = () => {
    const url = "https://fakestoreapiserver.reactbd.com/smart";
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(url)
                setData(res.data);
                console.log(res.data);
                setLoading(false);
            }
            catch (err) {
                console.log("Error : ", err);
            }
        }
        fetchData();
    }, [])
    return [Data, loading];
}

export default FetchAPI;
