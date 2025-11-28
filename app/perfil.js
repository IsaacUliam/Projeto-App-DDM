import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Platform } from "react-native";
import foto from "../assets/logo-real.png";
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

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
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
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#8B0000',
    textAlign: 'center',
    width: '100%',
    alignSelf: 'stretch',
    marginBottom: 20,
    paddingTop: 40,
    paddingBottom: 30,
    letterSpacing: 1.5,
    borderRadius: 0,
    borderBottomWidth: 4,
    borderBottomColor: '#333',
  },

  img: {
    width: 220,
    height: 220,
    marginBottom: 25,
    borderRadius: 110,
    borderWidth: 4,
    borderColor: '#8B0000',
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B0000',
    width: 100,
  },

  value: {
    fontSize: 18,
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
