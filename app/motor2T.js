import { View, Text, Pressable, Image, ScrollView, ImageBackground, StyleSheet, StatusBar, Platform, } from 'react-native';
import { useRouter,  } from 'expo-router';
import motor01 from "../assets/motor2t01.png";
import motorTempo1 from "../assets/motores_2_tempos_p1.png";
import motorTempo2 from "../assets/motores_2_tempos_p2.png";
import bg from "../assets/background.png";

export default function Motor2T() {

  const router = useRouter();

  return (
    <ImageBackground source={bg} style={styles.bg}>
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Pressable onPress={() => router.back()}>
                <Text style={styles.voltar}>Voltar</Text>
              </Pressable>
            </View>

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
    width: "100%",
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
    width: '200%',
    height: 3,
    backgroundColor: '#333',
    marginTop: 5,
    marginBottom: 20,
    alignSelf: 'center',
  },

  voltar: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#8b0000',
    borderRadius: 6,
    marginRight: 230,
    marginTop: 10,
    textAlign: 'center',
  },

  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 60,
    width: "100%",
    alignItems: "center",
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    letterSpacing: 1.5,
    width: "95%",
  },

  texto: {
    fontSize: 16,
    color: "#444",
    lineHeight: 22,
    marginBottom: 10,
    marginTop: 10,
    width: "95%",
  },

  texto2: {
    fontSize: 18,
    color: "#000",
    lineHeight: 24,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'justify',
    width: "95%",
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8b0000",
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'center',
    width: "95%",
  },

  subtitulo2: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginVertical: 10,
    width: "95%",
  },

  subtitulo3: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8b0000",
    marginTop: 25,
    marginBottom: 20,
    textAlign: 'left',
  },

  bloco: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    elevation: 2,
    borderColor: "#333",
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
    width: "95%",
  },

  lista: {
    fontSize: 16,
    color: "#444",
    marginBottom: 5,
  },

  img: {
    width: "80%",
    height: 256,
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
    width: "80%",
    height: 230,
    resizeMode: "cover",
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#A9A9A9',
    alignSelf: 'center',
  },

  gif: {
    width: "90%",
    height: 330,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#333",
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
  },
});
