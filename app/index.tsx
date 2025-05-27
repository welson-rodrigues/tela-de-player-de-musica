import { Image, StyleSheet, View } from "react-native";
import { Icon } from "react-native-paper";
import ProgressBar from 'react-native-progress/Bar';


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Icon
        source="menu-down"
          color={"#FFFFFF"}
          size={45}
        />
      </View>

      <Image
        style={styles.imagemMusica}
        source={require("../assets/images/Oumou Sangaré.jpg")}
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
    marginTop: 15,
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
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },

  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: -20,
  },

  starContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 13,
  },
});
