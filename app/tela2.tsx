import { StyleSheet, View, Text, Image } from "react-native";
//import { Link } from "expo-router";
import * as React from 'react';
import { Searchbar, IconButton  } from 'react-native-paper';
import { Icon } from "react-native-paper";
//import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

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
            <View style={styles.nomesContainer}>
                <View style={styles.musicaComImagem}>
                <View><Text style={styles.musica}>Músicas</Text></View>
                <Image
                    style={styles.imagemRoxo}
                    source={require("../assets/images/roxo_musica.png")}
                    />
                </View>
                
                <View><Text style={styles.textos}>Vídeos</Text></View>
                <View><Text style={styles.textos}>Artistas</Text></View>
                <View><Text style={styles.textos}>Álbuns</Text></View>
            </View>
            <View style={styles.aleatorioContainer}>
                <Image
                    style={styles.Ellipse}
                    source={require("../assets/images/Ellipse 2.png")}/>
                <View style={styles.play}>
                    <Icon
                        source="play-outline"
                        color={"#FFFFFF"}
                        size={26}
                    />
                </View>
                 <View><Text style={styles.aleatorio}>Reprodução aleatória</Text></View>
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
        marginTop: -8,
        height: 60,
    },
    
    pesquisa: {
        flex: 1,
        height: 45,
        marginLeft: 0,
    },

    tune: {
        marginTop: 5,
        right: 10,
    },

    musica: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 7,
        fontFamily: 'Arial',
    },

    textos: {
        color: '#FFFFFF',
        fontSize: 17,
        marginTop: 10,
        fontFamily: 'Arial',
    },

    nomesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 10,
        alignItems: "flex-start",
    },

    musicaComImagem: {
        flexDirection: "column",
        alignItems: "center",
    },

    imagemRoxo: {
        marginTop: 5,
        width: 30,
        resizeMode: "contain",
    },

    aleatorioContainer: {
        flexDirection: "row",
        right: 85,
        marginTop: 13,
    },

    aleatorio: {
        color: '#FFFFFF',
        fontSize: 17,
        marginTop: 10,
        fontFamily: 'Arial',
        left: 14,
        top: -4,
    },

    Ellipse: {
        
    },

    play: {
        position: "absolute",
        top: "2%",
        left: "1.3%",
    },
});
