import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import bg from "../assets/background.png";
import img1 from "../assets/revFrancesa1.png";
import img2 from "../assets/revFrancesa2.png";
import img3 from "../assets/revFrancesa3.png";
import img4 from "../assets/revFrancesa4.png";

export default function App() {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={styles.titulo}>Revolução Francesa</Text>

            <View style={styles.linha} />

            <Text style={styles.textos}>
              A Revolução Francesa foi um dos acontecimentos mais marcantes da
              história mundial. <Text style={styles.bold}>Iniciada em 1789,</Text> Ela representou a insatisfação
              do povo francês com as desigualdades sociais, os altos impostos e o
              poder concentrado nas mãos da nobreza e do clero. {'\n'}Inspirados pelos
              ideais de liberdade, igualdade e fraternidade, os revolucionários
              buscaram derrubar o <Text style={styles.bold}>Antigo Regime e construir uma sociedade mais
              justa,</Text> baseada na soberania popular e nos direitos humanos.
            </Text>

            <Image source={img1} style={styles.imagem} />

            <Text style={styles.textos}>
              Durante esse período, a França passou por profundas transformações
              políticas, sociais e econômicas. <Text style={styles.bold}>A queda da Bastilha simbolizou o
              início do fim do absolutismo</Text> e documentos como a <Text style={styles.bold}>Declaração dos
              Direitos do Homem e do Cidadão</Text> trouxeram novos princípios que
              influenciaram o mundo todo.
            </Text>

            <Image source={img2} style={styles.imagem} />

            <Text style={styles.textos}>
              O fim do Antigo Regime na França, com o estabelecimento de uma
              República, teve um efeito dominó na Europa. Reis e nobres por todo o
              continente temeram a propagação desses ideais de soberania popular e
              tentaram reprimir os movimentos liberais.
            </Text>

            <Image source={img3} style={styles.imagem} />

            <Text style={styles.textos}>
              Enquanto a França passava por sua revolução política e social, a
              vizinha Inglaterra já vivia um intenso processo de transformação
              econômica, a Revolução Industrial. A busca por maior eficiência e
              produção exigia novas tecnologias, impulsionando a indústria e o
              capitalismo emergente.
            </Text>

            <Image source={img4} style={styles.imagem} />

            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 40,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.8)",
  },

  container: {
    flex: 1,
    width: "100%",
    maxWidth: Platform.OS === "web" ? 900 : "100%",
    alignItems: "center",
    paddingTop: 40,
  },

  bg: {
    flex: 1,
    resizeMode: "cover",
  },

  linha: {
    width: "90%",
    height: 4,
    backgroundColor: "#333",
    marginBottom: 20,
  },

  imagem: {
    width: Platform.OS === "web" ? "80%" : "90%",
    height: Platform.OS === "web" ? 320 : 220,
    marginVertical: 20,
    borderWidth: 3,
    borderColor: "#333",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: Platform.OS === "web" ? 12 : 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    backgroundColor: "#fff",
  },

  textos: {
    width: "90%",
    fontSize: Platform.OS === "web" ? 22 : 16,
    lineHeight: Platform.OS === "web" ? 34 : 24,
    color: "#222",
    backgroundColor: "#fff",
    padding: Platform.OS === "web" ? 28 : 14,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: Platform.OS === "web" ? 10 : 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
    textAlign: "justify",
  },

  titulo: {
    fontSize: Platform.OS === 'web' ? 60 : 34,
    fontWeight: "bold",
    color: "#8B0000",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 1.5,
  },

  bold: {
    fontWeight: "bold",
  },
});
