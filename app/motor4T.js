import { View, Text, Pressable, Image, ScrollView, StyleSheet, StatusBar, ImageBackground, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import motor01 from "../assets/motor4t01.png";
import motorV2 from "../assets/motor-V2-4-tempos.gif";
import motorGif from "../assets/motor-monocilindro-4-tempos.gif";
import motor4Cilindros from "../assets/motor-4-cilindros-4-tempos.gif";
import motorTempo1 from "../assets/t1-4.png";
import motorTempo2 from "../assets/t2-4.png";
import motorTempo3 from "../assets/t3-4.png";
import motorTempo4 from "../assets/t4-4.png";
import bg from "../assets/background.png";

export default function Motor4T() {

  const router = useRouter();

  return (
    <ImageBackground source={bg} style={styles.bg}>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Text style={styles.voltar}>Voltar</Text>
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>

            <Text style={styles.titulo}>Motor 4 Tempos</Text>
            <View style={styles.linha} />

            <Text style={styles.texto2}>
              Os motores 4 tempos são conhecidos pelo funcionamento mais suave e eficiente.
            </Text>

            <Image source={motor01} style={styles.img} />

            <Text style={styles.texto2}>
              Eles completam o ciclo de combustão em quatro etapas bem definidas, o que os torna mais econômicos, duráveis e menos poluentes. São comuns na maioria das motos modernas, carros e máquinas que precisam de desempenho estável e confiável.
            </Text>

            <View style={styles.bloco}>
              <Text style={styles.subtitulo}>Como funciona</Text>

              <Text style={styles.texto}>
                O motor 4 tempos realiza o ciclo completo em quatro etapas: admissão, compressão, combustão e escape.
              </Text>

              {/* TEMPO 1 */}
              <Text style={styles.subtitulo}>1° Tempo – Admissão</Text>
              <Text style={styles.texto}>
                • O pistão desce.{'\n'}
                • A válvula de admissão se abre.{'\n'}
                • A mistura de ar + combustível entra no cilindro.
              </Text>
              <Image source={motorTempo1} style={styles.img2} />

              {/* TEMPO 2 */}
              <Text style={styles.subtitulo}>2° Tempo – Compressão</Text>
              <Text style={styles.texto}>
                • O pistão sobe.{'\n'}
                • Todas as válvulas fecham.{'\n'}
                • A mistura é comprimida.
              </Text>
              <Image source={motorTempo2} style={styles.img2} />

              {/* TEMPO 3 */}
              <Text style={styles.subtitulo}>3° Tempo – Explosão</Text>
              <Text style={styles.texto}>
                • A vela solta uma faísca.{'\n'}
                • A mistura explode.{'\n'}
                • O pistão é empurrado para baixo.
              </Text>
              <Image source={motorTempo3} style={styles.img2} />

              {/* TEMPO 4 */}
              <Text style={styles.subtitulo}>4° Tempo – Escape</Text>
              <Text style={styles.texto}>
                • O pistão sobe.{'\n'}
                • A válvula de escape abre.{'\n'}
                • Os gases queimados são expulsos.
              </Text>
              <Image source={motorTempo4} style={styles.img2} />
            </View>

            {/* GIF */}
            <Text style={styles.subtitulo}>Funcionamento em um GIF</Text>
            <Image source={motorGif} style={styles.gif} />



            <View style={styles.bloco}>
              <Text style={styles.subtitulo2}>
                O motor 4 tempos é o tipo mais usado no mundo. Ele pode existir em vários formatos:
              </Text>
              <Text style={styles.lista}>• Motores em linha — simples e compactos.</Text>
              <Text style={styles.lista}>• Motores em V — mais torque e suavidade.</Text>
              <Text style={styles.lista}>• Motores boxer — cilindros opostos, vibração baixa.</Text>
              <Text style={styles.lista}>• Motores em W — usados em carros muito potentes.</Text>
            </View>

            <Text style={styles.subtitulo3}>Motor 4 cilindros em Linha</Text>

            <Image source={motor4Cilindros} style={styles.gifWide} />

            <View style={styles.bloco}>
              <Text style={styles.subtitulo3}>Vantagens</Text>
              <Text style={styles.lista}>• Mais econômico.</Text>
              <Text style={styles.lista}>• Menos poluente.</Text>
              <Text style={styles.lista}>• Mais durável.</Text>
              <Text style={styles.lista}>• Funcionamento suave.</Text>
              <Text style={styles.lista}>• Ideal para uso contínuo.</Text>
            </View>

            <View style={styles.bloco}>
              <Text style={styles.subtitulo3}>Desvantagens</Text>
              <Text style={styles.lista}>• Mais pesado.</Text>
              <Text style={styles.lista}>• Construção complexa.</Text>
              <Text style={styles.lista}>• Menos potência por cilindrada.</Text>
              <Text style={styles.lista}>• Resposta mais lenta.</Text>
              <Text style={styles.lista}>• Ocupa mais espaço.</Text>
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
    alignSelf: Platform.OS === 'web' ? 'center' : 'auto',
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
    width: "95%",
  },

  lista: {
    fontSize: Platform.OS === 'web' ? 20 : 16,
    color: "#444",
    marginBottom: 5,
    marginLeft: Platform.OS === 'web' ? 15 : 0,
    textAlign: 'left',
  },

  listaTexto: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
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
    width: Platform.OS === 'web' ? '30%' : '60%',
    height: Platform.OS === 'web' ? 530 : 340,
    resizeMode: "cover",
    borderRadius: 8,
    margin: Platform.OS === 'web' ? 40 : 15,
    borderWidth: Platform.OS === 'web' ? 4 : 2,
    borderColor: '#A9A9A9',
    alignSelf: 'center',
  },

  gif: {
    width: Platform.OS === 'web' ? 235 : '50%',
    height: Platform.OS === 'web' ? 500 : 400,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: Platform.OS === 'web' ? 5 : 3,
    borderColor: "#333",
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
  },

  gifWide: {
    width: Platform.OS === 'web' ? '70%' : '90%',
    height: Platform.OS === 'web' ? 450 : 233,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: Platform.OS === 'web' ? 5 : 3,
    borderColor: "#333",
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
    alignSelf: 'center',
  },
});
