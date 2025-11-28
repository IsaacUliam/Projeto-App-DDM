import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View, Pressable, ImageBackground, Platform } from "react-native";
import { useRouter } from 'expo-router';
import logo from "../assets/motorLogopng.png";
import motor2T from "../assets/motor-2T-img.png";
import motor4T from "../assets/motor-4T-img.png";
import bg from "../assets/background.png";

export default function App() {

  const router = useRouter();

  return (
    <ImageBackground source={bg} style={styles.bg}>
      <View style={styles.overlay}>
        <ScrollView>
          <Text style={styles.titulo}>Motores a Combustão Interna</Text>

          <View style={styles.container}>

            <Image source={logo} style={styles.imgLogo} />

            <Text style={styles.textoIntro}>
              Os motores a combustão mudaram a forma como nos deslocamos e produzimos.
              Eles funcionam queimando combustível para gerar movimento — simples, mas genial.
              Aqui você descobre as diferenças entre o motor 2T e o 4T, e como cada um deles se destaca.
            </Text>

            <Text style={styles.subtitulo}>Escolha um tipo de motor:</Text>

            <View style={styles.card}>
              <Text style={styles.cardTitulo}>Motor 2 Tempos</Text>
              <Pressable onPress={() => router.push('/motor2T')}>
                <Image source={motor2T} style={styles.cardImg} />
              </Pressable>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitulo}>Motor 4 Tempos</Text>
              <Pressable onPress={() => router.push('/motor4T')}>
                <Image source={motor4T} style={styles.cardImg} />
              </Pressable>
            </View>

            <StatusBar style="auto" />

          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: Platform.OS === 'web' ? 900 : "100%",
  },

  bg: {
    flex: 1,
    resizeMode: "cover",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.8)",
  },

  titulo: {
    fontSize: Platform.OS === 'web' ? 60 : 34,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#8B0000',
    textAlign: 'center',
    width: '100%',
    alignSelf: 'stretch',
    marginBottom: 20,
    paddingTop: 40,
    paddingBottom: 30,
    letterSpacing: 1.5,
    borderRadius: 0,
    borderBottomWidth: 4,
    borderBottomColor: '#333',
  },

  imgLogo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 22,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#333333',
    resizeMode: 'contain',
  },

  textoIntro: {
    width: Platform.OS === "web" ? "85%" : "90%",
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#8B0000',
    elevation: 3,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    textAlign: 'justify',
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",

  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 15,
    paddingBottom: 5,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#8b0000',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2B2B2B',
    marginBottom: 12,
    textAlign: 'center',
    color: '#8b0000',
    fontWeight: 'bold',
  },

  cardImg: {
    width: '70%',
    height: 180,
    aspectRatio: 1.6,
    borderRadius: 12,
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
  },

});
