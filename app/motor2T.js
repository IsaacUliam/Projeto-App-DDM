import { View, Text, Pressable, Image, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import motor01 from "../assets/motor2t01.png";
import motorTempo1 from "../assets/motores_2_tempos_p1.png";
import motorTempo2 from "../assets/motores_2_tempos_p2.png";

export default function Motor2T() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Pressable onPress={() => router.back()}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>← Voltar</Text>
        </Pressable>
      </View>
      <ScrollView>


        <Text>Motor 2 Tempos</Text>
        <Text>
          Os motores 2 tempos são conhecidos pela simplicidade e pelo funcionamento rápido. <Image source={motor01} style={styles.img} />{'\n'}Eles completam o ciclo de combustão com menos peças e em menos etapas, o que os torna leves, fortes para o tamanho e fáceis de manter. São comuns em motos menores, ferramentas e máquinas que precisam de potência imediata.
        </Text>
        <View>
          <Text style={{ fontWeight: "bold" }}>Como funciona</Text>
          <Text>
            O motor 2 tempos completa o ciclo com apenas duas etapas do movimento do pistão. Por isso ele é mais simples, mais leve e tem explosão a cada volta do virabrequim.{"\n\n"}
          </Text>
          <View>
            <Text style={{ fontWeight: "bold", }}>Primeiro Tempo 1°T - Compressão + Combustão:{"\n"}</Text>
            <Text>
              O pistão sobe comprimindo a mistura de ar + combustível + óleo dentro do cilindro.{"\n\n"}
              Quando o pistão chega no topo, a vela dá a faísca, ocorre a explosão e isso empurra o pistão para baixo.{"\n"}
            </Text>
            <Image source={motorTempo1} />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", }}>Segundo Tempo 2°T - Escape + Admissão:{"\n"}</Text>
            <Text>
              Enquanto o pistão é empurrado para baixo pela explosão:
              {'\n\n'}
              • A abertura de escape libera os gases queimados.
              {'\n\n'}
              • A abertura de admissão deixa entrar uma nova mistura fresca que já vem do cárter.
              {'\n\n'}
              • Quando o pistão desce, ele pressuriza a mistura no cárter e a joga para dentro do cilindro para o próximo ciclo.{"\n"}
              <Image source={motorTempo2} />
            </Text>
          </View>
          <View>
            <Text>Funcionamento em um Gif</Text>
            <Text>
              O motor realiza esse movimento de subida e descida do pistão várias vezes por minuto. Esse movimento linear é transformado em movimento circular pela biela, que transmite a força para o virabrequim, fazendo-o girar.
            </Text>
            <Image source={require('../assets/2-tempos.gif')} style={{ width: 300, height: 300 }} />
          </View>
          <Text>
            O motor 2 tempos era muito comum em motos mais antigas, como a Yamaha RD 135, Honda ML 125 e Suzuki AX 100.
            Hoje em dia, veículos modernos quase não utilizam esse tipo de motor devido ao alto consumo de combustível e à poluição elevada que ele gera.
            Atualmente, os motores 2 tempos permanecem principalmente em máquinas e equipamentos estacionários, como motosserras, roçadeiras e alguns motores de pequeno porte.{'\n'}
          </Text>
          <View>
            <Text>Vantagens{'\n'}</Text>
            <Text>
              • Mais simples: menos peças internas.{'\n'}
            </Text>
            <Text>
              • Mais leve: ideal para máquinas portáteis como motosserras e roçadeiras.{'\n'}
            </Text>
            <Text>
              • Mais potente por cilindrada: a cada volta do virabrequim ele gera força, então entrega mais potência que um 4T do mesmo tamanho.{'\n'}
            </Text>
            <Text>
              • Responde rápido: aceleração forte e imediata.{'\n'}
            </Text>
          </View>
           <Text>{'\n'}</Text>
          <View>
            <Text>Desvantagens{'\n'}</Text>
            <Text>
              • Maior consumo de combustível: queima mistura de gasolina + óleo, gastando mais.{'\n'}
            </Text>
            <Text>
              • Polui mais: queima de óleo gera fumaça e mais emissões.{'\n'}
            </Text>
            <Text>
              • Menor durabilidade: peças sofrem mais desgaste por falta de lubrificação separada.{'\n'}
            </Text>
            <Text>
              • Funcionamento mais brusco: vibra mais e é menos suave que um motor 4T.{'\n'}
            </Text>
            <Text>
              • Barulho alto: tende a ser mais ruidoso.{'\n'}
            </Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </View >
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