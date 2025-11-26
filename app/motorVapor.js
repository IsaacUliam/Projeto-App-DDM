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
    <backgroundColor style={{backgroundColor: '#f4f4f4',}}>
        <Text style={styles.titulo}>Motores a Vapor</Text>
        <View style={{ width: '100%', height: 4, paddingLeft: -20  , backgroundColor: '#333', marginTop: 5, marginBottom: 20 }} />
      <View style={styles.container}>
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
                Com o avanço da tecnologia, os motores a vapor foram, aos poucos, substituindo a força dos cavalos e permitindo o surgimento dos primeiros trens.
              </Text>

              <Image source={trem1} style={styles.imgPequena2} />

              <Text style={[styles.textoBloco, { marginTop: 15 }]}>
                Durante o século XIX, locomotivas e navios a vapor dominaram o transporte, levando pessoas e cargas a longas distâncias com muito mais velocidade. O vapor representou um grande avanço técnico, mas a partir de 1930 começou a perder espaço para locomotivas e embarcações a diesel e eletricidade, que eram mais rápidas e eficientes.
              </Text>

              <View style={styles.duasImagens}>
                <Image source={trem2} style={styles.imagens} />
                <Image source={navio} style={styles.imagens} />
              </View>

              <Text style={[styles.textoBloco, { marginTop: 15 }]}>
                Essa mudança marcou o fim da era do vapor e abriu caminho para os sistemas ferroviários modernos que usamos até hoje.
              </Text>
            </View>
          )}
        </View>

        <StatusBar style="auto" />
      </View>
</backgroundColor>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingTop: 50,
  },
  
  duasImagens: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 15,
  },

  imagens: {
    width: '48%',
    minWidth: 140,
    height: 120,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: '#C0C0C0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    marginTop: 30,
    letterSpacing: 1.5,
  },

  texto: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 25,
    color: '#333333',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#8B0000',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
  },

  img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 25,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#333333',
    resizeMode: 'contain',
    backgroundColor: '#fff',

  },

  imgPequena: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#A9A9A9',
    resizeMode: 'cover',
  },

  imgPequena2: {
    width: '100%',
    height: 180,
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#A9A9A9',
    resizeMode: 'cover',
  },

  imgGif: {
    width: '100%',
    height: 160,
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#A9A9A9',
    marginTop: 15,
  },

  bloco: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5.46,
  },

  textoBloco: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    textAlign: 'justify',
    
  },

  botao: {
    paddingVertical: 12,
    backgroundColor: '#DCDCDC',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    elevation: 2,
    
  },

  botaoTexto: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    color: '#4F4F4F',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B0000',
    marginTop: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingBottom: 3,
  },
});
