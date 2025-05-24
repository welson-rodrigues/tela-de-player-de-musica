import { Image, StyleSheet, View } from "react-native";
import { Icon, MD3Colors } from 'react-native-paper';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Icon
          source="menu-down"
	  color={"#FFFFFF"}
	  size={40}
	  style={styles.menuDown}
        />
      </View>	

      <Image style={styles.imagemMusica}
      source={require("../assets/images/Oumou Sangaré.jpg")}
      />

      <View style={styles.controlsContainer}>

	<Icon
	  source="repeat"
	  color={"#FFFFFF"}
	  size={40}
	 // style={styles.Menu}
	/>         

        <Icon
	  source="skip-previous"
	  color={"#FFFFFF"}
	  size={40}
	 // style={styles.Repeat}
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

        <Icon
	  source="skip-next"
	  color={"#FFFFFF"}
	  size={40}
	 // style={styles.Next}
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

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 30,
    width: "100%",
    backgroundColor: "black"
  },

  imagemMusica: {
    marginTop: 20,
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
    marginTop: 150,
    gap: 20, //espaço entre os ícones
  },


  PlayContainer: {
    position: 'absolute',
    top: '50%',
    left: '55%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },

  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -20,
  },

  menuDown: {
    marginTop: 20,
  },
})
