import react from "react";
import {Text, View, StyleSheet, FlatList} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultList = ({ title, results }) => {
    return <View style={styles.container}>
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
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 5
    },
});

export default ResultList;