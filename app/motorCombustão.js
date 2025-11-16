import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from 'expo-router';
import logo from "../assets/motorLogo.png"
import motor2T from "../assets/motor-2T-img.png"
import motor4T from "../assets/motor-4T-img.png";


export default function App() {

  const router = useRouter();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Motores a Combustão Interna</Text>
        <Image source={logo} style={styles.img} />
        <Text>
          Os motores a combustão mudaram a forma como nos deslocamos e produzimos. Eles funcionam queimando combustível para gerar movimento simples, mas genial. Aqui você descobre as diferenças entre o motor 2T e o 4T, e como cada um deles se destaca.
        </Text>
        <View>
        <Text>Escolha um tipo de motor:</Text>
          <View>
            <Text>Motor 2 Tempos</Text>
            <Pressable onPress={() => router.push('/motor2T')}>
              <Image source={motor2T} style={{ width: 200, height: 200 }} />
            </Pressable>
          </View>
          <View>
            <Text>Motor 4 Tempos</Text>
            <Pressable onPress={() => router.push('/motor4T')}>
              <Image source={motor4T} style={{ width: 200, height: 200 }} />
            </Pressable>
          </View>

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