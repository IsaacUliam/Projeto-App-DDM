import { View, Text, Pressable, Image, ScrollView, ImageBackground, StyleSheet, StatusBar, Platform, } from 'react-native';
import { useRouter, } from 'expo-router';
import motor01 from "../assets/motor2t01.png";
import motorTempo1 from "../assets/motores_2_tempos_p1.png";
import motorTempo2 from "../assets/motores_2_tempos_p2.png";
import bg from "../assets/background.png";

export default function Motor2T() {

  const router = useRouter();

  return (
    <ImageBackground source={bg} style={styles.bg}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Pressable onPress={() => {router.replace("/motorCombustao")}}>
            <Text style={styles.voltar}>Voltar</Text>
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>


            <Text style={styles.titulo}>Motor 2 Tempos</Text>
            <View style={styles.linha} />


            <Text style={styles.texto2}>
              Os motores 2 tempos são conhecidos pela simplicidade e pelo funcionamento rápido.
            </Text>

            <Image source={motor01} style={styles.img} />

            <Text style={styles.texto2}>
              Eles completam o ciclo de combustão com menos peças e em menos etapas, o que os torna leves, fortes para o tamanho e fáceis de manter.
            </Text>

            <View style={styles.bloco}>
              <Text style={styles.subtitulo}>Como funciona</Text>

              <Text style={styles.texto}>
                O motor 2 tempos completa o ciclo com apenas duas etapas...
              </Text>

              <Text style={styles.subtitulo2}>Primeiro Tempo 1°T - Compressão + Combustão</Text>
              <Text style={styles.texto}>
                O pistão sobe comprimindo a mistura de ar + combustível + óleo...
              </Text>

              <Image source={motorTempo1} style={styles.img2} />

              <Text style={styles.subtitulo2}>Segundo Tempo 2°T - Escape + Admissão</Text>

              <Text style={styles.texto}>
                Enquanto o pistão é empurrado para baixo pela explosão:
              </Text>

              <Image source={motorTempo2} style={styles.img2} />
            </View>

            <Text style={styles.subtitulo}>Funcionamento em um GIF</Text>

            <Image
              source={require('../assets/2-tempos.gif')}
              style={styles.gif}
            />

            <Text style={styles.texto}>
              O motor realiza esse movimento de subida e descida...
            </Text>

            <View style={styles.bloco}>
              <Text style={styles.subtitulo3}>Vantagens</Text>
              <Text style={styles.lista}>• Mais simples</Text>
              <Text style={styles.lista}>• Mais leve</Text>
              <Text style={styles.lista}>• Mais potente por cilindrada</Text>
              <Text style={styles.lista}>• Responde rápido</Text>
            </View>

            <View style={styles.bloco}>
              <Text style={styles.subtitulo3}>Desvantagens</Text>
              <Text style={styles.lista}>• Maior consumo de combustível</Text>
              <Text style={styles.lista}>• Polui mais</Text>
              <Text style={styles.lista}>• Menor durabilidade</Text>
              <Text style={styles.lista}>• Vibra mais</Text>
              <Text style={styles.lista}>• Barulho alto</Text>
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

  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: Platform.OS === 'web' ? 900 : "100%",
  },

  header: {
    padding: 20,
    marginLeft: Platform.OS === 'web' ? 300 : 0,
    width: Platform.OS === 'web' ? "220%" : "100%",
    alignItems: "flex-start",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.8)",
  },

  bg: {
    flex: 1,
    resizeMode: "cover",
  },

  linha: {
    width: '500%',
    height: 3,
    backgroundColor: '#333',
    marginTop: 5,
    marginBottom: 20,
    alignSelf: 'center',
  },

  voltar: {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#8b0000',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: Platform.OS === 'web' ? 28 : 20,
    paddingVertical: Platform.OS === 'web' ? 12 : 6,
    paddingHorizontal: Platform.OS === 'web' ? 32 : 14,
    alignSelf: Platform.OS === 'web' ? 'flex-start' : 'auto',
    marginTop: Platform.OS === 'web' ? 20 : 10,
    marginLeft: Platform.OS === 'web' ? 40 : 0,
    marginRight: Platform.OS === 'web' ? 200 : 0,
  },

  titulo: {
    fontSize: Platform.OS === 'web' ? 60 : 34,
    fontWeight: 'bold',
    color: '#8b0000',
    textAlign: 'center',
    width: Platform.OS === 'web' ? '500%' : '100%',
    paddingBottom: 30,
    letterSpacing: 1.5,
  },

  texto: {
    fontSize: Platform.OS === 'web' ? 22 : 16,
    color: "#444",
    lineHeight: 22,
    marginBottom: Platform.OS === 'web' ? 25 : 10,
    marginTop: Platform.OS === 'web' ? 25 : 10,
    width: "95%",
    textAlign: Platform.OS === 'web' ? 'center' : 'justify',
  },

  texto2: {
    fontSize: Platform.OS === 'web' ? 24 : 18,
    color: "#000",
    lineHeight: 24,
    marginBottom: 20,
    marginTop: 20,
    letterSpacing: Platform.OS === 'web' ? 1.5 : 0,
    textAlign: Platform.OS === 'web' ? 'center' : 'justify',
    width: "95%",
  },

  subtitulo: {
    fontSize: Platform.OS === 'web' ? 30 : 22,
    fontWeight: "bold",
    color: "#8b0000",
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'center',
    width: "95%",
  },

  subtitulo2: {
    fontSize: Platform.OS === 'web' ? 30 : 18,
    fontWeight: "600",
    color: "#333",
    marginVertical: 10,
    width: "95%",
    textAlign: Platform.OS === 'web' ? 'center' : 'left',
  },

  subtitulo3: {
    fontSize: Platform.OS === 'web' ? 28 : 22,
    fontWeight: "bold",
    color: "#8b0000",
    marginTop: 25,
    marginBottom: 20,
    marginLeft: Platform.OS === 'web' ? 15 : 0,
    textAlign: 'left',
  },

  bloco: {
    backgroundColor: "#fff",
    padding: Platform.OS === 'web' ? 5 : 15,
    borderRadius: 10,
    marginVertical: 15,
    elevation: 2,
    borderColor: "#333",
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
    width: "90%",
  },

  lista: {
    fontSize: Platform.OS === 'web' ? 20 : 16,
    color: "#444",
    marginBottom: 5,
    marginLeft: Platform.OS === 'web' ? 15 : 0,
    textAlign: 'left',
  },

  img: {
    width: Platform.OS === 'web' ? '60%' : "80%",
    height: Platform.OS === 'web' ? 470 : 256,
    resizeMode: "cover",
    marginRight: "10%",
    marginLeft: "10%",
    margin: 15,
    borderWidth: 3,
    borderColor: "#333",
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
  },

  img2: {
    width: Platform.OS === 'web' ? '50%' : '80%',
    height: Platform.OS === 'web' ? 430 : 240,
    resizeMode: "cover",
    borderRadius: 8,
    margin: Platform.OS === 'web' ? 40 : 15,
    borderWidth: Platform.OS === 'web' ? 4 : 2,
    borderColor: '#A9A9A9',
    alignSelf: 'center',
  },

  gif: {
    width: Platform.OS === 'web' ? 500 : '90%',
    height: Platform.OS === 'web' ? 522 : 330,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: Platform.OS === 'web' ? 5 : 3,
    borderColor: "#333",
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
  },
});
