import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View, Pressable, UIManager, Platform } from "react-native";
import { LayoutAnimation } from 'react-native';
import motorLogo from "../assets/motorVapor1.png";
import motor from "../assets/motorVapor2.png";
import trem1 from "../assets/locomotiva1.png";
import trem2 from "../assets/locomotiva2.png";
import navio from "../assets/navio1.png";
import motorVaporGif from "../assets/motorVaporGif.gif";

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  const [mostrarOnde, setMostrarOnde] = useState(false);
  const [mostrarComo, setMostrarComo] = useState(false);
  const [mostrarFuturo, setMostrarFuturo] = useState(false);

  const toggle = (setFunc) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setFunc(prev => !prev);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Motores a Vapor</Text>
        <Image source={motorLogo} style={styles.img} />
        <Text>
          Nesse cenário de crescimento industrial, a máquina a vapor tornou-se o símbolo
          da nova produção. Ao transformar vapor em força mecânica, ela acelerou fábricas
          e transportes, mudando a forma de trabalhar. Esse avanço abriu caminho para
          motores ainda mais eficientes, que veremos adiante.
        </Text>

        <View style={{ marginTop: 20 }}>
          <Pressable onPress={() => toggle(setMostrarOnde)}>
            <Text>
              {mostrarOnde ? 'Onde Surgiu ▲' : 'Onde Surgiu? ▼'}
            </Text>
          </Pressable>

          {mostrarOnde && (
            <View>
              <Text>
                O motor a vapor surgiu na Inglaterra, no fim do século XVII, a partir de máquinas usadas para bombear água. Newcomen criou um modelo funcional e James Watt o aprimorou, tornando-o eficiente para mover fábricas e navios. Essa invenção marcou o início da produção mecanizada e mudou o transporte e a indústria.
                <Image source={motor}/>
              </Text>
            </View>
          )}
        </View>


        <View style={{ marginTop: 20 }}>
          <Pressable onPress={() => toggle(setMostrarComo)}>
            <Text>
              {mostrarComo ? 'Como Funciona ▲' : 'Como Funciona? ▼'}
            </Text>
          </Pressable>

          {mostrarComo && (
            <View>
              <Text style={{fontWeight: "bold",}}>Geração de Vapor:{"\n"}</Text>
              <Text>
                Um combustível (carvão, madeira, óleo) é queimado para aquecer a água em um recipiente fechado chamado caldeira.{"\n\n"}
                O aquecimento transforma a água em vapor sob alta pressão.{"\n"}
              </Text>
              <Text style={{fontWeight: "bold",}}>Expansão (Cilindro e Pistão):{"\n"}</Text>
              <Text>
                O vapor de alta pressão é liberado através de uma válvula e forçado a entrar em um cilindro.{"\n\n"}
                A pressão do vapor empurra um pistão para frente e para trás. Esta é a conversão de energia térmica em movimento.{"\n"}
              </Text>
              <Text style={{fontWeight: "bold",}}>Expansão (Cilindro e Pistão):{"\n"}</Text>
              <Text>
                O movimento linear do pistão é transferido para uma biela e, em seguida, para um virabrequim{"\n"}
                O virabrequim transforma o movimento de vaivém em movimento rotativo, que faz as rodas girarem ou aciona outras máquinas.{"\n"}
                <Image source={motorVaporGif}/>
              </Text>
            </View>
          )}
        </View>


        <View style={{ marginTop: 20 }}>
          <Pressable onPress={() => toggle(setMostrarFuturo)}>
            <Text>
              {mostrarFuturo ? 'Futuro dos Motores ▲' : 'Futuro dos Motores ▼'}
            </Text>
          </Pressable>

          {mostrarFuturo && (
            <View>
              <Text>
                Com o avanço da tecnologia, os motores a vapor foram, aos poucos, substituindo a força dos cavalos e permitindo o surgimento dos primeiros trens. {"\n"}<Image source={trem1}/> Durante o século XIX, locomotivas e navios a vapor dominaram o transporte, levando pessoas e cargas a longas distâncias com muito mais velocidade. O vapor representou um grande avanço técnico, mas a partir de 1930 começou a perder espaço para locomotivas e embarcações a diesel e eletricidade, que eram mais rápidas e eficientes. {"\n"} <Image source={trem2}/> <Image source={navio}/> Essa mudança marcou o fim da era do vapor e abriu caminho para os sistemas ferroviários modernos que usamos até hoje.{"\n"}<Image />
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
