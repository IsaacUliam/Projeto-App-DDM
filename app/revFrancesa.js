import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import img1 from "../assets/revFrancesa1.png"
import img2 from "../assets/revFrancesa2.png"


export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Revolução e Inovação</Text>
        <Text>Revolução Francesa</Text>
        <Text></Text>
        <Text>
          A Revolução Francesa foi um dos acontecimentos mais marcantes da
          história mundial. Iniciada em 1789, Ela representou a insatisfação do
          povo francês com as desigualdades sociais, os altos impostos e o poder
          concentrado nas mãos da nobreza e do clero. Inspirados pelos ideais de
          liberdade, igualdade e fraternidade, os revolucionários buscaram
          derrubar o Antigo Regime e construir uma sociedade mais justa, baseada
          na soberania popular e nos direitos humanos.
        </Text>
        <Text></Text>
        <Image source={img1}/>
        <Text></Text>
        <Text>
          Durante esse período, a França passou por profundas transformações
          políticas, sociais e econômicas. A queda da Bastilha simbolizou o
          início do fim do absolutismo, e documentos como a Declaração dos
          Direitos do Homem e do Cidadão trouxeram novos princípios que
          influenciaram o mundo todo. A Revolução também abriu espaço para o
          surgimento de novas formas de governo, o fortalecimento da burguesia e
          o avanço das ideias iluministas.
        </Text>
        <Text></Text>
        <Image source={img2}/>
        <Text></Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});