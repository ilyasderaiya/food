import {useState, useEffect} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async (initTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: initTerm,
                    location: 'toronto'
                }
            });
            setResults(response.data.businesses);
        }catch(err) {
            setErrMsg("Something went Wrong");
        }
    };

    useEffect(() => {
        searchApi('Indian');
    }, [])

    return [searchApi, errMsg, results]
};