import { StyleSheet, View, Text, Image } from "react-native";
//import { Link } from "expo-router";
import * as React from 'react';
import { Searchbar, IconButton, Icon  } from 'react-native-paper';
//import { Icon } from "react-native-paper";
import {SafeAreaView} from 'react-native-safe-area-context';
import { Link } from "expo-router";

export default function Index() {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
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
                        source={require("../assets/images/Ellipse 2.png")}/>
                    <View style={styles.play}>
                        <Icon
                            source="play"
                            color={"#FFFFFF"}
                            size={25}
                        />
                    </View>
                     <View><Text style={styles.aleatorio}>Reprodução aleatória</Text></View>
                </View>
                <View style={styles.containerImagem}>
                    <Image
                        style={styles.imagens}
                        source={require("../assets/images/jorge.jpg")}
                        />
                    
                    <View style={styles.containerNomeMusica}>
                        <Text style={styles.nomeMusica}>Jorge da Capadócia</Text>
                        <Text style={styles.canal} numberOfLines={1}>Racionais MC's | Classicos</Text>
                    </View>
                    <View style={styles.tresPontos}>
                        <Icon
                            source="dots-vertical"
                            color={"#4C4C4C"}
                            size={25}
                        />
                    </View>
                </View>
    
                <View style={styles.containerImagem}>
                    <Image
                        style={styles.imagens}
                        source={require("../assets/images/jorge.jpg")}
                        />
    
                    <View style={styles.containerNomeMusica}>
                        <Text style={styles.nomeMusica}>Jesus Chorou</Text>
                        <Text style={styles.canal} numberOfLines={1}>Racionais MC's | Classicos</Text>
                    </View>
                    <View style={styles.tresPontos}>
                        <Icon
                            source="dots-vertical"
                            color={"#4C4C4C"}
                            size={25}
                        />
                    </View>
                </View>
    
                <View style={styles.containerImagem}>
                    <Image
                        style={styles.imagens}
                        source={require("../assets/images/homem.jpeg")}
                        />
    
                    <View style={styles.containerNomeMusica}>
                        <Text style={styles.nomeMusica}>Homem na Estrada</Text>
                        <Text style={styles.canal} numberOfLines={1}>Racionais MC's | Raio X do Brasil</Text>
                    </View>
                    <View style={styles.homem}>
                        <Icon
                            source="dots-vertical"
                            color={"#4C4C4C"}
                            size={25}
                        />
                    </View>
                </View>
    
                <View style={styles.containerImagem}>
                    <Image
                        style={styles.imagens}
                        source={require("../assets/images/fantan.jpeg")}
                        />
    
                    <View style={styles.containerNomeMusica}>
                        <Text style={styles.nomeMusica}>Fantan Ni Mone</Text>
                        <Text style={styles.canal} numberOfLines={1}>Oumou Sangaré | Worotan</Text>
                    </View>
                    <View style={styles.tresPontos}>
                        <Icon
                            source="dots-vertical"
                            color={"#4C4C4C"}
                            size={25}
                        />
                    </View>
                </View>
    
                <View style={styles.containerImagem}>
                    <Image
                        style={styles.imagens}
                        source={require("../assets/images/fantan.jpeg")}
                        />
    
                    <View style={styles.containerNomeMusica}>
                        <Text style={styles.nomeMusica}>Worotan</Text>
                        <Text style={styles.canal} numberOfLines={1}>Oumou Sangaré | Worotan</Text>
                    </View>
                    <View style={styles.tresPontos}>
                        <Icon
                            source="dots-vertical"
                            color={"#4C4C4C"}
                            size={25}
                        />
                    </View>
                </View>
    
                <View style={styles.containerImagem}>
                    <Image
                        style={styles.imagens}
                        source={require("../assets/images/saa magni.jpeg")}
                        />
    
                    <View style={styles.containerNomeMusica}>
                        <Text style={styles.nomeMusicaTocando}>Saa Magni</Text>
                        <Text style={styles.canal} numberOfLines={1}>Oumou Sangaré | Ko Sira</Text>
                    </View>
                    <View style={styles.saa}>
                        <Icon
                            source="dots-vertical"
                            color={"#4C4C4C"}
                            size={25}
                        />
                    </View>
                </View>
    
                <View style={styles.containerImagem}>
                    <Image
                        style={styles.imagens}
                        source={require("../assets/images/onlyforyou.jpeg")}
                        />
    
                    <View style={styles.containerNomeMusica}>
                        <Text style={styles.nomeMusica}>Only For You</Text>
                        <Text style={styles.canal} numberOfLines={1}>Heartless Bastards - Topic | Heartless Ba...</Text>
                    </View>
                    <View style={styles.only}>
                        <Icon
                            source="dots-vertical"
                            color={"#4C4C4C"}
                            size={25}
                        />
                    </View>
                </View>
    
                {/* <View style={styles.containerImagem}>
                    <Image
                        style={styles.imagens}
                        source={require("../assets/images/once.jpeg")}
                        />
    
                    <View style={styles.containerNomeMusica}>
                        <Text style={styles.nomeMusica}>Once I Was Lonely</Text>
                        <Text style={styles.canal}>Gregory Isaacs - Topic | Gregory Isaacs...</Text>
                    </View>
                    <View style={styles.Pontos}>
                        <Icon
                            source="dots-vertical"
                            color={"#4C4C4C"}
                            size={25}
                        />
                    </View>
                </View> */}
            </View>
            <View style={styles.rodape}>
                <View style={styles.rodapeContainer}>
                    <View style={styles.rodapeItem}>
                        <IconButton
                            icon="headphones"
                            iconColor="#FFFFFF"
                            size={37}
                            onPress={() => {}}
                        />
                        <Text style={styles.minhasMusicas}>Minhas músicas</Text>
                    </View>

                    <View style={styles.rodapeItem}>
                        <IconButton
                            style={styles.video}
                            icon="video-outline"
                            iconColor="#707A81"
                            size={43}
                            onPress={() => {}}
                        />
                        <Text style={styles.assistir}>Assistir</Text>
                    </View>
                </View>
            </View>
            <View style={styles.musicaAtual}>
              <View style={styles.leftSection}>

                <Image
                    source={require("../assets/images/Ellipse 3.png")}
                    style={styles.albumCover}
                />

                <Link href='/' asChild>
                <Image
                    source={require("../assets/images/saa magni.jpeg")}
                    style={styles.albumMusicaSaa}
                />
                </Link>
                <View style={styles.textContainer}>
                  <Text style={styles.musicTitle}>Saa Magni</Text>
                  <Text style={styles.musicArtist}>Oumou Sangaré</Text>
                </View>
              </View>

              <View style={styles.rightSection}>
                <IconButton
                  icon="play-circle-outline"
                  iconColor="#FFFFFF"
                  size={30}
                  onPress={() => console.log('Play')}
                />
                <IconButton
                  icon="skip-next"
                  iconColor="#FFFFFF"
                  size={30}
                  onPress={() => console.log('Next')}
                />
              </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        padding: 30,
        backgroundColor: "black",
        marginTop: -40,
    },

    pesquisarContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginTop: -15,
        height: 60,
    },
    
    pesquisa: {
        flex: 1,
        height: 42,
        marginLeft: 0,
        right: 5,
    },

    tune: {
        marginTop: 5,
        right: 14,
    },

    musica: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        top: -2,
        fontFamily: 'Arial',
    },

    textos: {
        color: '#FFFFFF',
        fontSize: 17,
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
        //marginTop: 0,
        width: 30,
        resizeMode: "contain",
    },

    aleatorioContainer: {
        flexDirection: "row",
        width: "100%",
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

    play: {
        position: "absolute",
        top: "5%",
        left: "0.8%",
    },

    containerImagem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        width: '100%',
    },

    imagens: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },

    containerNomeMusica: {
        flex: 1,
        justifyContent: 'center',
    },

    nomeMusica: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    nomeMusicaTocando: {
        color: "#7B3CE1",
        top: -2,
        fontSize: 17,
    },

    canal: {
        color: "#797979",
        fontSize: 14,
    },

    rodape: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60, 
        backgroundColor: '#18171c',
    },

    musicaAtual: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#B7A24D',
      borderRadius: 35,
      padding: 10,
      marginHorizontal: 20,
      marginBottom: 68,
      height: 50,
    },

    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    albumCover: {
        width: 60,
        height: 60,
        borderRadius: 25,
        marginLeft: -13,
        marginBottom: 40,
    },

    textContainer: {
      justifyContent: 'center',
      left: 5,
    },

    musicTitle: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16,
    },

    musicArtist: {
      color: '#F3ECC9',
      fontSize: 12,
    },

    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },

     albumMusicaSaa: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginRight: -40,
        marginBottom: 40,
        right: 53,
    },

    tresPontos: {
        marginLeft: 110,
        top: 12,
        color: "#4C4C4C",
        //justifyContent: 'center',
        //alignItems: 'center',
        //padding: 5,
    },

    Pontos: {
        marginLeft: 18,
        top: 9,
    },

    only: {
        marginLeft: 10,
        top: 9,
    },

    saa: {
        marginLeft: 117,
        top: 12,
    },

    homem: {
        marginLeft: 70,
        top: 9,
    },

    rodapeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 70, // espaço entre o headphone e o video
        top: -10,
    },

    rodapeItem: {
        alignItems: 'center',
    },

    minhasMusicas: {
        color: '#FFFFFF',
        fontSize: 12,
        top: -18,
    },

    video: {
        top: -6,
    },

    assistir: {
        color: '#707A81',
        fontSize: 12,
        top: -24,
    },

    musicaAtualContainer: {
        flexDirection: 'row',
    },

    musicaAtualItem: {
        alignItems: 'center',
    },
});
