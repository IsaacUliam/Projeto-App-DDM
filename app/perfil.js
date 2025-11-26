import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import logo from "../assets/logo-real.png";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.titulo}>perfil</Text>
        <Image source={logo} style={styles.img} />
        <View style={{flexDirection: 'row',}}>
            <Text style={styles.subtituloNegro}>Idade: </Text><Text style={styles.subtitulo}>Isaac Daniel Silva Uliam</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
            <Text style={styles.subtituloNegro}>Nome: </Text><Text style={styles.subtitulo}>Isaac Daniel Silva Uliam</Text>
        </View>
        <View style={{flexDirection: 'row',}}>
            <Text style={styles.subtituloNegro}>Nome: </Text><Text style={styles.subtitulo}>Isaac Daniel Silva Uliam</Text>
        </View>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Saiba Mais</Text>
        </TouchableOpacity>
        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 30,  // Espaço para o final da tela
  },

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1.5,
    borderBottomWidth: 4,
    borderBottomColor: '#333333',
    paddingBottom: 10,
  },

  subtitulo: {
    fontSize: 22,
    color: "#333",
    textAlign: 'center',
  },

  subtituloNegro: {
    fontSize: 22,
    color: "#333",
    fontWeight: 'bold',
    textAlign: 'center',
  },

  img: {
    width: 240,
    height: 240,
    marginBottom: 20,
    borderRadius: 120,  // Deixa a imagem com borda arredondada
    borderWidth: 5,
    borderColor: '#000', // Um contorno sutil
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    backgroundColor: '#fff',
  },

  textos: {
    width: "90%",
    fontSize: 17,
    lineHeight: 24,
    color: "#333",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  button: {
    backgroundColor: "#8B0000",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: '600',
    textAlign: 'center',
  },
});
