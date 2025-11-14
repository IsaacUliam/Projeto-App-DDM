import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View, Pressable, UIManager, Platform } from "react-native";
import { LayoutAnimation } from 'react-native';
import img1 from "../assets/motorVapor1.png";

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  const [mostrarMais, setMostrarMais] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setMostrarMais(prev => !prev);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Motores a Vapor</Text>
        <Image source={img1} style={styles.img} />
        <Text>
          Nesse cenário de crescimento industrial, a máquina a vapor tornou-se o símbolo
          da nova produção. Ao transformar vapor em força mecânica, ela acelerou fábricas
          e transportes, mudando a forma de trabalhar. Esse avanço abriu caminho para
          motores ainda mais eficientes, que veremos adiante.
        </Text>

        <View style={{ marginTop: 20 }}>
          <Pressable onPress={toggle}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'blue' }}>
              {mostrarMais ? 'Ver menos ▲' : 'Ver mais ▼'}
            </Text>
          </Pressable>

          {mostrarMais && (
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 14 }}>
                Aqui aparece o texto escondido depois que clicar no "ver mais".{"\n"}
                Esse texto foi deixado um pouco maior apenas para você conseguir ver a
                animação funcionando direitinho.{"\n"}
                Depois, você pode diminuir o conteúdo sem problema — a animação continuará.
              </Text>
            </View>
          )}
        </View>

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

  img: {
    width: 256,
    height: 256,
  }
});
