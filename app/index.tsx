import { Text, View, StyleSheet, Image } from "react-native";
import { IconButton, MD3Colors } from 'react-native-paper';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagemMusica}
      source={require("../assets/images/Oumou Sangaré.jpg")}
      />

      <View style={styles.controlsContainer}>
        <Image 
          style={styles.Repeat}
          source={require('../assets/images/esquerda.png')}
        />
        
        <View style={styles.ellipseContainer}>
          <Image 
            style={styles.Ellipse}
            source={require('../assets/images/Ellipse 1.png')}
          />
          <Image 
            style={styles.Play}
            source={require('../assets/images/Play.png')}
          />
        </View>

        <Image 
          style={styles.Next}
          source={require('../assets/images/direita.png')}
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
    backgroundColor: "black"
  },

  imagemMusica: {
    marginTop: 10,
    width: 330,
    height: 330,
    borderRadius: 25,
  },

  Ellipse: {
    width: 80,
    height: 80,
    //marginBottom: 200,
    //  alignSelf: 'center',
  },

  Play: {
    width: 35,
    height: 30,
    position: 'absolute',
    top: '50%',
    left: '51%',
    transform: [{ translateX: -15 }, { translateY: -15 }], //metade de 30 para centralizar
  },

  ellipseContainer: {
    width: 80,
    height: 80,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    //marginTop: 50,
  },
  
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 140,
  },

  Repeat: {
    width: 40,
    height: 40,
    right: 20,
  },

  Next: {
    width: 40,
    height: 40,
    left: 20
  },
  
})