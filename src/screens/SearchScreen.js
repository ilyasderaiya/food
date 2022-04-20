import react, { useState } from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultsList"



const SearchScreen = () => {

    const [term, setTerm] = useState("");
    const [searchApi, errMsg, results] = useResults();
    console.log(results);

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={{ flex:1 }}>
            <SearchBar 
                term={term} 
                onTermChange = {setTerm}
                onTermSubmit = {() => searchApi(term)}
            />
            {/* {errMsg ? <Text>{errMsg}</Text> : null} */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultList results={filterResultByPrice("$")} title="Cost Effective"/> 
                <ResultList results={filterResultByPrice("$$")} title="Bit Pricer"/>
                <ResultList results={filterResultByPrice("$$$")} title="Big Spender"/>
            </ScrollView>
        </View>
    );
            
};

const styles = StyleSheet.create({});

export default SearchScreen;
