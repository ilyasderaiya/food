import react from "react";
import { View, Image, Text, StyleSheet} from "react-native";

const ResultsDetail = ({ result }) => {
    return ( 
            <View style={styles.view} >
                <Image style={styles.image} source={{ uri: result.image_url }}/>
                <Text style={styles.name} >{result.name}</Text>
                <Text>{result.rating} stars, {result.review_count} reviews</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 250,
        borderRadius: 5,
    },
    name: {
        fontWeight: "bold"
    },
    view: {
        padding: 10
    }
});

export default ResultsDetail;