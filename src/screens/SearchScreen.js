import react, { useState } from "react";
import {Text, View, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {

    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async () => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'toronto'
                }
            });
            setResults(response.data.businesses);
        }catch(err) {
            setErrMsg("Something went Wrong");
        }
    }

    return <View>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit= {searchApi}
        />
        {errMsg ? <Text>{errMsg}</Text> : null}
        <Text>We have {results.length} results </Text>
    </View>
};

const styles = StyleSheet.create({});

export default SearchScreen;
