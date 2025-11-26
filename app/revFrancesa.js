import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import bg from "../assets/background.png";
import img1 from "../assets/revFrancesa1.png";
import img2 from "../assets/revFrancesa2.png";
import img3 from "../assets/revFrancesa3.png";
import img4 from "../assets/revFrancesa4.png";

export default function App() {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>Revolução Francesa</Text>
          <Text></Text>
          <Text style={styles.textos}>
            A Revolução Francesa foi um dos acontecimentos mais marcantes da
            história mundial. <Text style={{ fontWeight: "bold" }}>Iniciada em 1789,</Text> Ela representou a insatisfação
            do povo francês com as desigualdades sociais, os altos impostos e o
            poder concentrado nas mãos da nobreza e do clero. {'\n'}Inspirados pelos
            ideais de liberdade, igualdade e fraternidade, os revolucionários
            buscaram derrubar o <Text style={{ fontWeight: "bold" }}>Antigo Regime e construir uma sociedade mais
              justa,</Text> baseada na soberania popular e nos direitos humanos.
          </Text>
          <Text></Text>
          <Image source={img1} style={styles.imagem} />
          <Text></Text>
          <Text style={styles.textos}>
            Durante esse período, a França passou por profundas transformações
            políticas, sociais e econômicas. <Text>A queda da Bastilha simbolizou o
              início do fim do absolutismo,</Text> e documentos como a <Text>Declaração dos
                Direitos do Homem e do Cidadão</Text> trouxeram novos princípios que
            influenciaram o mundo todo. A Revolução também abriu espaço para o
            surgimento de novas formas de governo, o fortalecimento da burguesia e
            o avanço das <Text>ideias iluministas.</Text>
          </Text>
          <Text></Text>
          <Image source={img2} style={styles.imagem} />
          <Text></Text>
          <Text style={styles.textos}>
            O fim do Antigo Regime na França, com o estabelecimento de uma
            República, teve um efeito dominó na Europa. Reis e nobres por todo o
            continente temeram a propagação desses ideais de soberania popular e
            tentaram reprimir os movimentos liberais.
          </Text>
          <Text></Text>
          <Image source={img3} style={styles.imagem} />
          <Text></Text>
          <Text style={styles.textos}>
            Enquanto a França passava por sua revolução política e social, a
            vizinha Inglaterra já vivia um intenso processo de transformação
            econômica, a Revolução Industrial. As mudanças políticas na França e a
            consolidação dos interesses burgueses na Europa removeram os entraves
            do Antigo Regime, criando um cenário mais favorável para o
            desenvolvimento do capitalismo e a expansão da indústria. A busca
            incessante por maior produção e eficiência, um pilar do capitalismo
            impulsionado pela nova ordem social burguesa, exigia novas
            tecnologias.
          </Text>
          <Text></Text>
          <Image source={img4} style={styles.imagem} />
          <StatusBar style="auto" />
        </View>
      </ScrollView >
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },

  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  imagem: {
    width: "90%",
    height: 220,
    margin: 15,
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#333",
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
  },

  textos: {
    fontSize: 16,
    marginLeft: "5%",
    marginRight: "5%",
    lineHeight: 24,
    color: "black",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    boxShadow: "0px 10px 14px #444",
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
    letterSpacing: 1.5,
    borderBottomWidth: 4,
    borderBottomColor: '#333333',
    paddingBottom: 10,
  },

});
