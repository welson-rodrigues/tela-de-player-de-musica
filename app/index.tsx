import { Image, StyleSheet, View } from "react-native";
import { Icon } from "react-native-paper";

export default function Index() {
  const progress = 60;  // Exemplo: 60% de progresso

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

      {/* Barra de Progresso */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
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

  progressContainer: {
    width: "100%",
    height: 5,
    backgroundColor: "#555",
    borderRadius: 5,
    marginTop: 30,
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
});
