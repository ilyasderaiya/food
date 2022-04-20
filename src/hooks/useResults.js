import {useState, useEffect} from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async (searchTerm) => {
        // console.log(searchTerm);
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'toronto'
                }
            });
            setResults(response.data.businesses);
        }catch(err) {
            setErrMsg("Something went Wrong");
            //console.log(err);
        }
    };

    useEffect(() => {
        searchApi('Mexican');
    }, [])

    return [searchApi, errMsg, results]
};