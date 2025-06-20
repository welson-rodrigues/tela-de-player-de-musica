import { LinearGradient } from 'expo-linear-gradient';
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { Icon, IconButton } from "react-native-paper";
import ProgressBar from 'react-native-progress/Bar';

export default function Index() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgb(128, 128, 128)', 'transparent']}
        style={styles.background}
      />
      <View style={styles.menuDots}>
        <Icon
          source="dots-vertical"
          color={"#FFFFFF"}
          size={45}
        />
      </View>

      <View style={styles.menuDown}>
        <Link href="/Minhas_Musicas" asChild>
          <IconButton
            icon="menu-down"
            iconColor={"#FFFFFF"}
            size={45}
            onPress={() => {}}
          />
        </Link>
      </View>
      
      <Image
        style={styles.imagemMusica}
        source={require("../assets/images/Oumou Sangaré.jpg")} 
      />
        
       <Image
          style={styles.nomeMusica}
          source={require("../assets/images/Saa Magni.png")}
        />

        <Image
          style={styles.nomeAutor}
          source={require("../assets/images/Oumou Sangaré.png")}
        />

      <View style={styles.starContainer}>
        <Icon
          source="star"
          color={"#BF6A02"}
          size={45}
        />
      </View>

      <View style={{ marginTop: 110, alignItems: 'center' }}>
        <ProgressBar 
          progress={0.6}
          width={350}
          height={10}
          color="#FFFFFF"
          unfilledColor="#333"
          borderWidth={0}
        />

       <Text style={styles.inicio}>4:25</Text>
        <Text style={styles.fim}>7:21</Text>
        
      </View>

      <View style={styles.controlsContainer}>
        <Icon
          source="repeat"
          color={"#FFFFFF"}
          size={40}
        />

        <Icon
          source="skip-previous"
          color={"#FFFFFF"}
          size={40}
        />

        <View style={styles.ellipseContainer}>
          <Image
            style={styles.Ellipse}
            source={require("../assets/images/Ellipse 1.png")}
          />
          <View style={styles.PlayContainer}>
            <Icon
            source="play-outline"
              color={"#FFFFFF"}
              size={50}
            />
          </View>
        </View>

        <Icon
          source="skip-next"
          color={"#FFFFFF"}
          size={40}
        />

        <Icon
          source="menu"
          color={"#FFFFFF"}
          size={40}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    width: "100%",
    backgroundColor: "black",
  },

  imagemMusica: {
    marginTop: -5,
    width: '100%',
    height: 330,
    borderRadius: 25,
  },

  Ellipse: {
    width: 80,
    height: 80,
  },

  ellipseContainer: {
    width: 80,
    height: 80,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
    gap: 20,
  },

  PlayContainer: {
    position: "absolute",
    top: "50%",
    left: "55%",
    transform: [{ translateX: -25 }, { translateY: -25 }], // totalmente no meio
  },

  menuDots: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: -20,
    left: 15,
  },

  menuDown: {
    width: "100%",
    flexDirection: "row",
    //justifyContent: "flex-end",
    marginTop: -60,
    right: 27,
  },

  starContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: -50,
  },

  nomeMusica: {
    marginTop: 15,
    width: 148,
    height: 26,
  },
  
  nomeAutor: {
    marginTop: 4,
    width: 134,
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 560,
  },

  inicio:{
    color: '#808080',
    right: 162,
    marginTop: 5,
  },

  fim: {
    color: '#808080',
    left: 162,
    marginTop: -20,
  },
});
