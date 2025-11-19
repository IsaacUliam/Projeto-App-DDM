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
        <Text style={styles.titulo}>Motores a Vapor</Text>
        <Image source={motorLogo} style={styles.img} />
        <Text style={styles.texto}>
          Nesse cenário de crescimento industrial, a máquina a vapor tornou-se o símbolo
          da nova produção. Ao transformar vapor em força mecânica, ela acelerou fábricas
          e transportes, mudando a forma de trabalhar. Esse avanço abriu caminho para
          motores ainda mais eficientes, que veremos adiante.
        </Text>

        <View style={{ marginTop: 20 }}>
          <Pressable style={styles.botao} onPress={() => toggle(setMostrarOnde)}>
            <Text style={styles.botaoTexto}>
              {mostrarOnde ? 'Onde Surgiu ▲' : 'Onde Surgiu? ▼'}
            </Text>
          </Pressable>

          {mostrarOnde && (
            <View style={styles.bloco}>
              <Text style={styles.textoBloco}>
                O motor a vapor surgiu na Inglaterra, no fim do século XVII, a partir de máquinas usadas para bombear água. Newcomen criou um modelo funcional e James Watt o aprimorou, tornando-o eficiente para mover fábricas e navios. Essa invenção marcou o início da produção mecanizada e mudou o transporte e a indústria.
              </Text>
              <Image source={motor} style={styles.imgPequena} />
            </View>
          )}
        </View>


        <View style={{ marginTop: 20 }}>
          <Pressable style={styles.botao} onPress={() => toggle(setMostrarComo)}>
            <Text style={styles.botaoTexto}>
              {mostrarComo ? 'Como Funciona ▲' : 'Como Funciona? ▼'}
            </Text>
          </Pressable>

          {mostrarComo && (
            <View style={styles.bloco}>
              <Text style={styles.subtitulo}>Geração de Vapor:{"\n"}</Text>
              <Text style={styles.textoBloco}>
                Um combustível (carvão, madeira, óleo) é queimado para aquecer a água em um recipiente fechado chamado caldeira.{"\n\n"}
                O aquecimento transforma a água em vapor sob alta pressão.{"\n"}
              </Text>
              <Text style={styles.subtitulo}>Expansão (Cilindro e Pistão):{"\n"}</Text>
              <Text style={styles.textoBloco}>
                O vapor de alta pressão é liberado através de uma válvula e forçado a entrar em um cilindro.{"\n\n"}
                A pressão do vapor empurra um pistão para frente e para trás. Esta é a conversão de energia térmica em movimento.{"\n"}
              </Text>
              <Text style={styles.subtitulo}>Movimento:{"\n"}</Text>
              <Text style={styles.textoBloco}>
                O movimento linear do pistão é transferido para uma biela e, em seguida, para um virabrequim.{"\n\n"}
                O virabrequim transforma o movimento de vaivém em movimento rotativo, que faz as rodas girarem ou aciona outras máquinas.{"\n\n"}
                <Image source={motorVaporGif} style={styles.imgGif} />
              </Text>
            </View>
          )}
        </View>


        <View style={{ marginTop: 20 }}>
          <Pressable style={styles.botao} onPress={() => toggle(setMostrarFuturo)}>
            <Text style={styles.botaoTexto}>
              {mostrarFuturo ? 'Futuro dos Motores ▲' : 'Futuro dos Motores ▼'}
            </Text>
          </Pressable>

          {mostrarFuturo && (
            <View style={styles.bloco}>
              <Text style={styles.textoBloco}>
                Com o avanço da tecnologia, os motores a vapor foram, aos poucos, substituindo a força dos cavalos e permitindo o surgimento dos primeiros trens. {"\n"}
              </Text>
              <Image source={trem1} style={styles.imgPequena2} />
              <Text style={styles.textoBloco}>
                {"\n"}Durante o século XIX, locomotivas e navios a vapor dominaram o transporte, levando pessoas e cargas a longas distâncias com muito mais velocidade. O vapor representou um grande avanço técnico, mas a partir de 1930 começou a perder espaço para locomotivas e embarcações a diesel e eletricidade, que eram mais rápidas e eficientes.{"\n"}
              </Text>
              <View style={styles.duasImagens}>
                <Image source={trem2} style={styles.imagens}/> <Image source={navio} style={styles.imagens}/>
              </View>
              <Text style={styles.textoBloco}>
                {"\n"}  Essa mudança marcou o fim da era do vapor e abriu caminho para os sistemas ferroviários modernos que usamos até hoje.{"\n"}
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
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 40,
  },

  duasImagens: {
    flexDirection: 'column',
    justifyContent: 'center',
    
  },

  imagens: {
    width: 300, 
    height: 200,
    resizeMode: 'cover', 
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#333',
    borderRadius: 10,
    margin: 5,
},

  titulo: {
    fontSize: 30,
    fontWeight: '900',
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.15)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  texto: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    color: "black",
    backgroundColor: "#2222",
    borderRadius: 8,
    padding: 10,
  },

  img: {
    width: 260,
    height: 260,
    alignSelf: 'center',
    marginBottom: 15,
  },

  imgPequena: {
    width: 300,
    height: 240,
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#333',
    borderRadius: 10,
    resizeMode: 'contain',
  },

  imgPequena2: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#333',
    borderRadius: 10,
    resizeMode: 'contain',
  },

  imgGif: {
    width: 300,
    height: 160,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#333',
    borderRadius: 10,
  },

  bloco: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2222',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: "#000",
    boxShadow: "0px 10px 14px #444",
  },

  textoBloco: {
    fontSize: 16,
    lineHeight: 24,
    color: "black",
  },

  botao: {
    paddingVertical: 10,

  },

  botaoTexto: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#8B0000',
    borderBottomWidth: 2,
    borderBottomColor: '#333',

  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginBottom: 4,
  },
});

