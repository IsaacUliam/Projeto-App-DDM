import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import logo from "../assets/logo-real.png"


export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Revolução e Inovação</Text>
        <Image source={logo} style={styles.img} />
        <Text style={styles.textos}>Nas ruas de Paris, o fogo da revolta acendeu ideias que ecoariam por séculos.
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
    backgroundColor: "#f2f2f2",
    paddingVertical: 30,
    alignItems: "center",
  },

  titulo: {
    fontSize: 30,
    fontWeight: '900',
    marginTop: 30,
    marginBottom: 10,
    color: '#8B0000',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2
  },

  img: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },

  textos: {
    width: "90%",
    fontSize: 17,
    lineHeight: 24,
    color: "#222",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 30,
   backgroundColor: "#2222",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    boxShadow: "0px 10px 14px #444",
  },
});