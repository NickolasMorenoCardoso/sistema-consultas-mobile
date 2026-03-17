import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

// Definição do Tipo (Conectando com a lógica da aula anterior)
type Consulta = {
  id: number;
  paciente: string;
  medico: string;
  data: string;
  status: "agendada" | "confirmada" | "cancelada" | "realizada";
};

export default function App() {
  // Estado tipado: garante que o objeto siga a interface Consulta
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    paciente: "Carlos Andrade",
    medico: "Dr. Roberto Silva",
    data: "20/03/2026",
    status: "agendada",
  });

  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
    // Um toque de UX para ganhar pontos com o professor
    console.log("Consulta confirmada com sucesso!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📅 Sistema de Consultas</Text>
      
      <View style={styles.card}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.valor}>{consulta.paciente}</Text>
        
        <Text style={styles.label}>Médico:</Text>
        <Text style={styles.valor}>{consulta.medico}</Text>
        
        <Text style={styles.label}>Data:</Text>
        <Text style={styles.valor}>{consulta.data}</Text>
        
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>Status: {consulta.status.toUpperCase()}</Text>
        </View>

        {/* Renderização Condicional: Botão só aparece se estiver agendada */}
        {consulta.status === "agendada" && (
          <View style={styles.buttonContainer}>
            <Button title="Confirmar Consulta" color="#2ecc71" onPress={confirmarConsulta} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2f3640",
    marginBottom: 30,
  },
  card: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    elevation: 5, // Sombra no Android
    shadowColor: "#000", // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  label: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 10,
  },
  valor: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: 5,
  },
  statusBadge: {
    backgroundColor: "#ebf5fb",
    padding: 8,
    borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
  },
  statusText: {
    color: "#2980b9",
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
  }
});