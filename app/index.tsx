import { Text, View, StyleSheet, Image } from "react-native";
import { IconButton, MD3Colors } from 'react-native-paper';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagemMusica}
      source={require("../assets/images/Oumou Sangaré.jpg")}
      />
      <View style={styles.ellipseContainer}>
        <Image style={styles.Ellipse}
        source={require('../assets/images/Ellipse 1.png')}
        />
        <Image style={styles.Play}
        source={require('../assets/images/Play.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 30,
    width: "100%",
    backgroundColor: "#A9A9A9"
  },

  imagemMusica: {
    marginTop: 10,
    width: 330,
    height: 330,
    borderRadius: 25,
  },

  Ellipse: {
    width: 68,
    height: 68,
    //marginTop: 50,
    //  alignSelf: 'center',
  },

  Play: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: '50%',
    left: '54%',
    transform: [{ translateX: -15 }, { translateY: -15 }], // metade de 30 para centralizar
  },

  ellipseContainer: {
    width: 68,
    height: 68,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 200,
  }
})