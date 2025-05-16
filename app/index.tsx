import { Text, View, StyleSheet, Image } from "react-native";
import { IconButton, MD3Colors } from 'react-native-paper';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagemMusica}
      source={require("../assets/images/Oumou Sangaré.jpg")}
      />
      <View style={styles.botaoPlay}>
        <IconButton
        icon="play-circle"
        iconColor={MD3Colors.error50}
        size={68}
        onPress={() => console.log('MERDA')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    padding: 25,
    width: "100%",
  },

  imagemMusica: {
    marginTop: 50,
    width: 340,
    height: 340,
    borderRadius: 25,
  },
  botaoPlay: {
    
  }
})