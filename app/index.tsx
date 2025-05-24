import { Image, StyleSheet, View } from "react-native";
import { Icon, MD3Colors } from 'react-native-paper';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagemMusica}
      source={require("../assets/images/Oumou Sangaré.jpg")}
      />

      <View style={styles.controlsContainer}>

         <Image 
          style={styles.Menu}
          source={require('../assets/images/Repeat.png')}
        />

        <Image 
          style={styles.Repeat}
          source={require('../assets/images/esquerda.png')}
        />

        <View style={styles.ellipseContainer}>
          <Image 
            style={styles.Ellipse}
            source={require('../assets/images/Ellipse 1.png')}
          />

          <View style={styles.PlayContainer}>
            <Icon
              source="play-outline"
              color={'#FFFFFF'}
              size={50}
            />
          </View>
        </View>

        <Image 
          style={styles.Next}
          source={require('../assets/images/direita.png')}
        />

         <Image 
          style={styles.Menu}
          source={require('../assets/images/Menu.png')}
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
    //width: 35,
    //height: 30,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }], //metade de 30 para centralizar
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
    marginTop: 200,
  },

  Repeat: {
    width: 40,
    height: 40,
    left: 10,
  },

  Next: {
    width: 40,
    height: 40,
    right: 10,
  },

  Menu: {

  },
  PlayContainer: {
    position: 'absolute',
    top: '50%',
    left: '55%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
})
