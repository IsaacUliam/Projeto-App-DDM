import { View, Text, Pressable, Image, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import motor01 from "../assets/motor4t01.png";
import motorV2 from "../assets/motor-V2-4-tempos.gif";
import motorGif from "../assets/motor-monocilindro-4-tempos.gif";
import motor4Cilindros from "../assets/motor-4-cilindros-4-tempos.gif"
import motorTempo1 from "../assets/t1-4.png";
import motorTempo2 from "../assets/t2-4.png";
import motorTempo3 from "../assets/t3-4.png";
import motorTempo4 from "../assets/t4-4.png";


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


        <Text>Motor 4 Tempos</Text>
        <Text>
          Os motores 4 tempos são conhecidos pelo funcionamento mais suave e eficiente.
          <Image source={motor01} style={styles.img} />{'\n'}Eles completam o ciclo de combustão em quatro etapas bem definidas, o que os torna mais econômicos, duráveis e menos poluentes. São comuns na maioria das motos modernas, carros e máquinas que precisam de desempenho estável e confiável.
          <Image source={motorV2} style={{ width: 300, height: 200, resizeMode: "contain" }} />
        </Text>
        <View>
          <Text style={{ fontWeight: "bold" }}>Como funciona</Text>
          <Text>
            O motor 4 tempos realiza o ciclo completo em quatro etapas do movimento do pistão: admissão, compressão, combustão e escape.
            Por funcionar dessa forma, ele entrega uma queima mais controlada, consome menos combustível e produz menos fumaça, além de ter explosão a cada duas voltas do virabrequim.{"\n\n"}
          </Text>
          <View>
            <Text style={{ fontWeight: "bold", }}>1°T Admissão (Entrada de ar e combustível):{"\n"}</Text>
            <Text>
              • O pistão desce.
              {'\n'}
              • A válvula de admissão se abre.
              {'\n'}
              • A mistura de ar + combustível entra no cilindro, puxada pelo movimento do pistão.
              {'\n'}
              <Image source={motorTempo1} />
            </Text>

          </View>
          <View>
            <Text style={{ fontWeight: "bold", }}>2°T Compressão (Mistura é comprimida){"\n"}</Text>
            <Text>
              • O pistão sobe.
              {'\n'}
              • Todas as válvulas ficam fechadas.
              {'\n'}
              • A mistura é comprimida, ficando mais densa e pronta para explodir.
              {'\n'}
              <Image source={motorTempo2} />
            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", }}>3°T Combustão / Explosão{"\n"}</Text>
            <Text>
              • A vela solta uma faísca.
              {'\n'}
              • A mistura comprimida explode.
              {'\n'}
              • A explosão empurra o pistão para baixo com força, gerando a potência do motor.
              {'\n'}
              <Image source={motorTempo3} />
            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: "bold", }}>4°T Exaustão / Escape (Saída dos gases queimados){"\n"}</Text>
            <Text>
              • O pistão sobe novamente.
              {'\n'}
              • A válvula de escape se abre.
              {'\n'}
              • Os gases queimados saem pelo escapamento, deixando o cilindro limpo para começar tudo de novo.
              {'\n'}
              <Image source={motorTempo4} />
            </Text>
          </View>
          <View>
            <Text>Funcionamento em um Gif</Text>
            <Text>
              O motor 4 tempos transfere o movimento de forma semelhante ao 2 tempos: o pistão sobe e desce e a biela transforma esse movimento em rotação no virabrequim.{'\n'}
              A diferença é que o 4T realiza esse ciclo em quatro etapas — admissão, compressão, combustão e exaustão o que deixa o funcionamento mais estável e eficiente.
            </Text>
            <Image source={motorGif} />
          </View>
          <View>
            <Text>
              O motor 4 tempos é o tipo de motor mais usado no mundo, presente na maioria das motos, carros e máquinas. Ele existe em vários formatos, cada um com suas características:{'\n'}
            </Text>

            <Text>
              • Motores em linha: cilindros enfileirados; simples, compactos e fáceis de manter.{'\n'}
            </Text>
            <Text>
              • Motores em V: cilindros formando um “V”; oferecem mais torque, suavidade e boa potência ocupando pouco espaço.{'\n'}
            </Text>
            <Text>
              • Motores boxer: cilindros opostos a 180°; usados em Subaru e no Fusca; vibram menos e têm centro de gravidade mais baixo.{'\n'}
            </Text>
            <Text>
              • Motores em W: usados em carros de alto desempenho; combinam alta potência com tamanho compacto.{'\n'}
            </Text>
            <Text>
              Graças ao bom equilíbrio entre economia, durabilidade e baixa poluição, o motor 4 tempos se tornou o padrão dos veículos modernos.{'\n'}
            </Text>
            <Image source={motor4Cilindros}/>
          </View>
          <View>
            <Text>Vantagens{'\n'}</Text>
            <Text>
              • Mais econômico: consome menos combustível que um 2T.{'\n'}
            </Text>
            <Text>
              • Mais limpo: emite bem menos fumaça e poluentes.{'\n'}
            </Text>
            <Text>
              • Mais durável: possui lubrificação separada, reduzindo desgaste interno.{'\n'}
            </Text>
            <Text>
              • Funcionamento suave: vibra menos e mantém rotação mais estável.{'\n'}
            </Text>
            <Text>
              • Ideal para uso contínuo: ótimo para motos, carros e máquinas que trabalham por horas.{'\n'}
            </Text>
          </View>

          <Text>{'\n'}</Text>

          <View>
            <Text>Desvantagens{'\n'}</Text>
            <Text>
              • Mais pesado: possui mais peças internas (válvulas, comando, etc.).{'\n'}
            </Text>
            <Text>
              • Construção mais complexa: manutenção pode ser mais cara. {'\n'}
            </Text>
            <Text>
              • Potência por cilindrada menor: gera explosão a cada duas voltas do virabrequim.{'\n'}
            </Text>
            <Text>
              • Resposta mais lenta: aceleração não é tão imediata quanto a de um 2T.{'\n'}
            </Text>
            <Text>
              • Ocupa mais espaço: motores 4T são maiores pelo número de componentes.{'\n'}
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