import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import logo from "../assets/logo-real.png"


export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Revolução e Inovação</Text>
        <Image source={logo} style={styles.img}/>
        <Text>Nas ruas de Paris, o fogo da revolta acendeu ideias que ecoariam por séculos.
          Enquanto multidões lutavam por liberdade, em oficinas e laboratórios uma nova chama surgia — discreta, mas capaz de mudar o rumo do progresso.
          O mesmo espírito que derrubou reis e ergueu nações também despertou a força que colocaria o mundo em movimento.</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 256,
    height: 256,
  }
});