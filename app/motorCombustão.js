import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View, Pressable, ImageBackground, Platform } from "react-native";
import { useRouter } from 'expo-router';
import logo from "../assets/motorLogopng.png";
import motor2T from "../assets/motor-2T-img1.png";
import motor4T from "../assets/motor-4T-img1.png";
import bg from "../assets/background.png";

export default function App() {

  const router = useRouter();

  return (
    <ImageBackground source={bg} style={styles.bg}>
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContent}> 
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
  scrollContent: {
    alignItems: 'center',
    minHeight: '100%',
    paddingBottom: 40,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: Platform.OS === 'web' ? 900 : "100%",
  },

  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.85)",
  },

  titulo: {
    fontSize: Platform.OS === 'web' ? 60 : 34,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#8B0000',
    textAlign: 'center',
    width: Platform.OS === 'web' ? '500%' : '100%',
    marginBottom: 20,
    paddingTop: 40,
    paddingBottom: 30,
    letterSpacing: 1.5,
    borderBottomWidth: 4,
    borderBottomColor: '#333',
  },

  imgLogo: {
    width: Platform.OS === 'web' ? 220 : 180,
    height: Platform.OS === 'web' ? 220 : 180,
    alignSelf: 'center',
    marginBottom: 22,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#333',
    resizeMode: 'contain',
  },

  textoIntro: {
    width: Platform.OS === "web" ? "85%" : "90%",
    fontSize: Platform.OS === "web" ? 22 : 16,
    lineHeight: Platform.OS === "web" ? 30 : 24,
    color: '#333',
    backgroundColor: '#FFF',
    padding: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#8B0000',
    marginBottom: 25,
    textAlign: 'justify',
    elevation: 3,
    shadowColor: Platform.OS === 'web' ? undefined : '#000',
    shadowOffset: Platform.OS === 'web' ? undefined : { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'web' ? undefined : 0.12,
    shadowRadius: Platform.OS === 'web' ? undefined : 3,
    ...(Platform.OS === 'web' && {
      boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
    }),

    borderRadius: 12,
  },

  subtitulo: {
    fontSize: Platform.OS === "web" ? 30 : 18,
    fontWeight: 'bold',
    color: '#8B0000',
    marginTop: 15,
    marginBottom: 5,
    paddingBottom: 3,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 25,
    alignItems: 'center',
    width: Platform.OS === 'web' ? 600 : "85%",
    height: Platform.OS === 'web' ? 380 : 250,
    borderWidth: 4,
    borderColor: '#8B0000',
    elevation: 4,
    shadowColor: Platform.OS === 'web' ? undefined : '#000',
    shadowOffset: Platform.OS === 'web' ? undefined : { width: 0, height: 3 },
    shadowOpacity: Platform.OS === 'web' ? undefined : 0.12,
    shadowRadius: Platform.OS === 'web' ? undefined : 4,
    ...(Platform.OS === 'web' && {
      boxShadow: "0px 6px 14px rgba(0,0,0,0.22)",
    }),
  },

  cardTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 12,
    textAlign: 'center',
  },

  cardImg: {
    width: Platform.OS === 'web' ? 400 : 300,
    height: Platform.OS === 'web' ? 300 : 180,
    borderRadius: 12,
    resizeMode: 'contain',
    backgroundColor: '#FFF',
  },

});
