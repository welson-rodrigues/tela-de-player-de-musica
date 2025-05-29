import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router"

export default function Index() {
  return (
    <View style={styles.container}>
        <Text>Minha segunda tela</Text>
        <Link href="/">Clique aqui para ir para o home</Link>
    </View>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});
