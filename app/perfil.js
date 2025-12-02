import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Platform } from "react-native";
import foto from "../assets/perfil.jpeg";
import bg from "../assets/background.png";

export default function App() {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={styles.titulo}>Perfil</Text>
            <Image source={foto} style={styles.img} />

            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.value}>Isaac Daniel Silva Uliam</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Idade:</Text>
                <Text style={styles.value}>17 anos</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Cidade:</Text>
                <Text style={styles.value}>Presidente Venceslau</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Profissão:</Text>
                <Text style={styles.value}>Estudante</Text>
              </View>
            </View>

            <View style={styles.sobre_container}>
              <Text style={styles.subtitulo_sobre}>Sobre</Text>
              <Text style={styles.texto}>{Platform.OS === 'web' ? '  Este aplicativo foi criado com a ideia de unir dois mundos que, à primeira vista, parecem totalmente diferentes: a Revolução Francesa, um dos eventos históricos mais importantes da humanidade, e os motores a combustão, uma das bases da tecnologia moderna.\n  Aqui, o usuário pode aprender sobre como o espírito de mudança, inovação e ruptura da Revolução Francesa se conecta, simbolicamente, ao avanço dos motores e à evolução das máquinas que transformaram o mundo.' : 'Este app combina dois temas diferentes: Revolução Francesa e motores a combustão. A ideia é aprender história e tecnologia de um jeito simples e rápido, com conteúdo claro e direto.'}</Text>
            </View>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    minHeight: '100%',
    paddingBottom: 40,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.8)",
  },

  bg: {
    flex: 1,
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    paddingTop: 0,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: Platform.OS === 'web' ? 900 : "100%",
  },

  titulo: {
    fontSize: Platform.OS === 'web' ? 60 : 34,
    width: Platform.OS === 'web' ? '500%' : '100%',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#8B0000',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    paddingTop: 40,
    paddingBottom: 30,
    letterSpacing: 1.5,
    borderRadius: 0,
    borderBottomWidth: 4,
    borderBottomColor: '#333',
  },

  texto: {
    fontSize: Platform.OS === 'web' ? 22 : 18,
    lineHeight: Platform.OS === 'web' ? 35 : 25,
    letterSpacing: Platform.OS === 'web' ? 1.0 : 0.5,
    padding: 20,
  },

  subtitulo_sobre: {
    textAlign: 'center',
    fontSize: Platform.OS === 'web' ? 30 : 22,
    color: '#fff',
    fontWeight: '600',
    padding: 10,
    backgroundColor: '#8b0000',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  sobre_container:{
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  img: {
    width: 220,
    height: 220,
    marginBottom: 25,
    borderRadius: 110,
    borderWidth: Platform.OS === 'web' ? 6 : 4,
    borderColor: '#333',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    backgroundColor: '#fff',
  },

  infoContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B0000',
    width: 130,
  },

  value: {
    fontSize: 20,
    color: '#333',
    flexShrink: 1,
  },

  button: {
    backgroundColor: "#8B0000",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
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
