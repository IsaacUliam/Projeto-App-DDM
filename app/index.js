import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Platform, ImageBackground } from "react-native";
import logo from "../assets/logo-real.png";
import bg from "../assets/background.png";


export default function App() {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={styles.titulo}>Revolução e Inovação</Text>
            <Image source={logo} style={styles.img} />

            <Text style={styles.textos}>
              Nas ruas de Paris, o fogo da revolta acendeu ideias que ecoariam por séculos. Enquanto
              multidões lutavam por liberdade, em oficinas e laboratórios uma nova chama surgia —
              discreta, mas capaz de mudar o rumo do progresso.
            </Text>

            <View style={styles.cardsContainer}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Liberdade</Text>
                <Text style={styles.cardText}>
                  A busca pela liberdade moldou sociedades, derrubando estruturas antigas e abrindo caminho para novas ideias.
                </Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Tecnologia</Text>
                <Text style={styles.cardText}>
                  Inovações surgiam silenciosas em laboratórios, mudando o ritmo do mundo e conectando pessoas.
                </Text>
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Progresso</Text>
                <Text style={styles.cardText}>
                  A combinação de coragem e conhecimento impulsionou o crescimento das nações e da humanidade.
                </Text>
              </View>
            </View>

            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
    alignItems: Platform.OS === 'web' ? 'center' : 'stretch',
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.8)",
  },

  bg: {
    flex: 1,
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: Platform.OS === 'web' ? 900 : "100%",
  },


  titulo: {
    fontSize: Platform.OS === 'web' ? 60 : 34,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#8B0000',
    textAlign: 'center',
    width: Platform.OS === 'web' ? '200%' : '100%',
    alignSelf: 'center',
    marginBottom: 20,
    paddingTop: 40,
    paddingBottom: 30,
    letterSpacing: 1.5,
    borderRadius: 0,
    borderBottomWidth: 4,
    borderBottomColor: '#333',
  },

  img: {
    width: Platform.OS === 'web' ? 280 : 220,
    height: Platform.OS === 'web' ? 280 : 220,
    marginBottom: 25,
    borderRadius: Platform.OS === 'web' ? 140 : 110,
    borderWidth: 5,
    borderColor: '#333333',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: Platform.OS === 'web' ? 12 : 8 },
    shadowOpacity: 0.3,
    shadowRadius: Platform.OS === 'web' ? 14 : 10,
  },

  textos: {
    width: "90%",
    fontSize: Platform.OS === 'web' ? 22 : 17,
    lineHeight: Platform.OS === 'web' ? 30 : 26,
    color: "#333",
    backgroundColor: "#fff",
    padding: Platform.OS === 'web' ? 30 : 20,
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: Platform.OS === 'web' ? 6 : 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    textAlign: "justify",
  },

  cardsContainer: {
    width: "95%",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#fff",
    padding: Platform.OS === 'web' ? 28 : 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: Platform.OS === 'web' ? 6 : 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#8B0000',
  },

  cardTitle: {
    fontSize: Platform.OS === 'web' ? 26 : 20,
    fontWeight: "bold",
    color: "#8B0000",
    marginBottom: 10,
  },

  cardText: {
    fontSize: Platform.OS === 'web' ? 19 : 16,
    color: "#555",
    lineHeight: Platform.OS === 'web' ? 28 : 22,
  },

  button: {
    backgroundColor: "#8B0000",
    paddingVertical: Platform.OS === 'web' ? 18 : 14,
    paddingHorizontal: Platform.OS === 'web' ? 60 : 40,
    borderRadius: 30,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: Platform.OS === 'web' ? 10 : 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  buttonText: {
    fontSize: Platform.OS === 'web' ? 22 : 18,
    color: "#fff",
    fontWeight: '600',
    textAlign: 'center',
  },
});
