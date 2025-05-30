import { StyleSheet, View } from "react-native";
//import { Link } from "expo-router";
import * as React from 'react';
import { Searchbar, IconButton  } from 'react-native-paper';

export default function Index() {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <View style={styles.container}>
            <View style={styles.pesquisarContainer}>
                <IconButton
                    style={styles.tune}
                    icon="tune"
                    iconColor="#FFFFFF"
                    size={42}
                    onPress={() => {}}
                />
                <Searchbar
                    style={styles.pesquisa}
                    placeholder="Pesquisar músicas e etc"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    />       
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        padding: 30,
        backgroundColor: "black",
    },

    pesquisarContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginTop: 5,
        height: 60,
    },
    
    pesquisa: {
        flex: 1,
        height: 50,
        marginLeft: 0,
    },

    tune: {
        marginTop: 5,
        right: 10,
    }
});
