import react, { useState } from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultsList"



const SearchScreen = () => {

    const [term, setTerm] = useState("");
    const [searchApi, errMsg, results] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <SearchBar 
                        term={term} 
                        onTermChange={setTerm}
                        onTermSubmit= {searchApi}
                    />
                    {errMsg ? <Text>{errMsg}</Text> : null}
                    <Text>We have {results.length} results </Text>
                    <ResultList results={filterResultByPrice("$")} title="Cost Effective"/> 
                    <ResultList results={filterResultByPrice("$$")} title="Bit pricer"/>
                    <ResultList results={filterResultByPrice("$$$")} title="Big spender"/>
                </View>
            </ScrollView>
};

const styles = StyleSheet.create({});

export default SearchScreen;
