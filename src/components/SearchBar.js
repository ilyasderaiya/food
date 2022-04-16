import react from "react";
import {Text, View, StyleSheet, TextInput} from "react-native";
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term , onTermChange, onTermSubmit }) => {
    return <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput 
            autoCapitalize="none"
            autoCorrect = {false}
            style = {styles.input} 
            placeholder = "Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
    </View>
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "lightgray",
        height: 50,
        margin: 15 ,
        borderRadius: 8,
        flexDirection: "row"
    },
    input: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize:35,
        alignSelf: "center",
        marginHorizontal:15
    }
});

export default SearchBar;
