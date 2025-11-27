import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import foto from "../assets/logo-real.png";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Perfil</Text>
        <View style={{ width: '100%', height: 4, backgroundColor: '#333', marginTop: 5, marginBottom: 20 }} />
        <Image source={foto} style={styles.img} />

        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>Isaac Daniel Silva Uliam</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Idade:</Text>
            <Text style={styles.value}>20 anos</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Cidade:</Text>
            <Text style={styles.value}>São Paulo</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Profissão:</Text>
            <Text style={styles.value}>Estudante / Desenvolvedor</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 Meu Perfil. Todos os direitos reservados.</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
  },
  
  container: {
    flex: 1,
    backgroundColor: "#f5f5f8",
    alignItems: "center",
    justifyContent: "flex-start",
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

  footer: {
    marginTop: 40,
    paddingVertical: 20,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "center",
  },

  footerText: {
    color: "#777",
    fontSize: 14,
    textAlign: "center",
  },
});
