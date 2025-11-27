import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from 'expo-router';
import logo from "../assets/motorLogopng.png";
import motor2T from "../assets/motor-2T-img.png";
import motor4T from "../assets/motor-4T-img.png";

export default function App() {

  const router = useRouter();

  return (
    <ScrollView>
        <Text style={styles.titulo}>Motores a Combustão Interna</Text>
        <View style={{ width: '100%', height: 4, backgroundColor: '#333', marginTop: 5, marginBottom: 20 }} />
      <View style={styles.container}>

        <Image source={logo} style={styles.imgLogo} />

        <Text style={styles.textoIntro}>
          Os motores a combustão mudaram a forma como nos deslocamos e produzimos.
          Eles funcionam queimando combustível para gerar movimento — simples, mas genial.
          Aqui você descobre as diferenças entre o motor 2T e o 4T, e como cada um deles se destaca.
        </Text>

        <Text style={styles.subtitulo}>Escolha um tipo de motor:</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Motor 2 Tempos</Text>
          <Pressable onPress={() => router.push('/motor2T')}>
            <Image source={motor2T} style={styles.cardImg} />
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Motor 4 Tempos</Text>
          <Pressable onPress={() => router.push('/motor4T')}>
            <Image source={motor4T} style={styles.cardImg} />
          </Pressable>
        </View>

        <StatusBar style="auto" />
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  
  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
    letterSpacing: 1.5,
  },
  
  imgLogo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 22,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#333333',
    resizeMode: 'contain',
    backgroundColor: '#fff',

  },

  textoIntro: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#8B0000',
    elevation: 3,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    textAlign: 'justify',
    borderRadius: 10,
    boxShadow: "0px 10px 14px #444",
    
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B0000',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#C4C4C4',
    paddingBottom: 5,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#8b0000',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2B2B2B',
    marginBottom: 12,
    textAlign: 'center',
    color: '#8b0000',
    fontWeight: 'bold',
  },

  cardImg: {
  width: '70%',
  height: 180,
  aspectRatio: 1.6, 
  borderRadius: 12,
  resizeMode: 'contain',
  backgroundColor: '#FFFFFF',
},

});
