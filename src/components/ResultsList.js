import react from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultList = ({ title, results }) => {
    return <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator = {false}
            data={results}
            keyExtractor={(result) =>
                { return result.id }
            }
            renderItem={({item}) => {
                return <ResultsDetail result={item} />
            }}
            
        />
    </View>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default ResultList;