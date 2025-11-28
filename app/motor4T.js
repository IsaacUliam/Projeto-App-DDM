import { View, Text, Pressable, Image, ScrollView, StyleSheet, StatusBar, ImageBackground } from 'react-native';
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
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable onPress={() => router.back()} style={styles.voltar}>
              <Text style={styles.voltarTexto}>Voltar</Text>
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContent}>


            <Text style={styles.titulo}>Motor 4 Tempos</Text>
            <View style={styles.linha} />

            <Text style={styles.texto2}>
              Os motores 4 tempos são conhecidos pelo funcionamento mais suave e eficiente.
            </Text>

            <Image source={motor01} style={styles.img} />

            <Text style={styles.texto2}>
              Eles completam o ciclo de combustão em quatro etapas bem definidas, o que os torna mais econômicos, duráveis e menos poluentes. São comuns na maioria das motos modernas, carros e máquinas que precisam de desempenho estável e confiável.
            </Text>

            <Image source={motorV2} style={styles.gifWide} />

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



            <View style={styles.lista}>
              <Text style={styles.subtitulo2}>
                O motor 4 tempos é o tipo mais usado no mundo. Ele pode existir em vários formatos:
              </Text>
              <Text style={styles.listaTexto}>
                • Motores em linha — simples e compactos.{'\n'}
                • Motores em V — mais torque e suavidade.{'\n'}
                • Motores boxer — cilindros opostos, vibração baixa.{'\n'}
                • Motores em W — usados em carros muito potentes.
              </Text>
            </View>

            <Text style={styles.subtitulo3}>Motor 4 cilindros em Linha</Text>

            <Image source={motor4Cilindros} style={styles.gifWide} />

            <View style={styles.lista}>
              <Text style={styles.subtitulo}>Vantagens</Text>

              <Text style={styles.listaTexto}>
                • Mais econômico.{'\n'}
                • Menos poluente.{'\n'}
                • Mais durável.{'\n'}
                • Funcionamento suave.{'\n'}
                • Ideal para uso contínuo.
              </Text>
            </View>

            <View style={styles.lista}>
              <Text style={styles.subtitulo}>Desvantagens</Text>

              <Text style={styles.listaTexto}>
                • Mais pesado.{'\n'}
                • Construção complexa.{'\n'}
                • Menos potência por cilindrada.{'\n'}
                • Resposta mais lenta.{'\n'}
                • Ocupa mais espaço.
              </Text>
            </View>


            <StatusBar style="auto" />
          </ScrollView>
        </View >
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    padding: 20,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.8)",
  },

  bg: {
    flex: 1,
    resizeMode: "cover",
  },

  header: {
    padding: 20,
    paddingBottom: 0,
  },

  linha: {
    width: '200%',
    height: 3,
    backgroundColor: '#333',
    marginTop: 5,
    marginBottom: 20,
    alignSelf: 'center',
  },

  voltarTexto: {
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

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    letterSpacing: 1.5,
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8b0000",
    marginTop: 25,
    marginBottom: 10,
  },

  subtitulo2: {
    fontSize: 18,
    textAlign: "justify",
    fontWeight: "bold",
    color: "#8b0000",
    marginTop: 25,
    marginBottom: 10,
  },

  subtitulo3: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#8b0000",
    marginTop: 25,
    marginBottom: 10,
    textAlign: "center",
  },

  texto: {
    fontSize: 16,
    color: "#444",
    lineHeight: 22,
    marginBottom: 10,
    marginTop: 10,
  },

  texto2: {
    fontSize: 18,
    color: "#000",
    lineHeight: 24,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'justify',
  },

  lista: {
    backgroundColor: "#fff",
    padding: 15,
    paddingTop: 0,
    borderRadius: 10,
    marginVertical: 15,
    elevation: 2,
    borderColor: "#333",
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
  },

  listaTexto: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
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
    height: 400,
    resizeMode: "cover",
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#A9A9A9',
    alignSelf: 'center',
  },

  gif: {
    backgroundColor: "#fff",
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#333",
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
  },

  gifWide: {
    backgroundColor: "#fff",
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#333",
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
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
  },
});
