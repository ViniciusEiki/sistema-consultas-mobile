import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Consulta } from "../interfaces/consulta";

type ConsultaCardProps = {
  consulta: Consulta;
  onConfirmar?: () => void;
  onCancelar?: () => void;
};

export default function ConsultaCard({
  consulta,
  onConfirmar,
  onCancelar,
}: ConsultaCardProps) {

  function formatarValor(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function formatarData(data: Date): string {
    return data.toLocaleDateString("pt-BR");
  }

  return (
    <View style={styles.card}>
      <Text>{consulta.paciente.nome}</Text>
      <Text>{formatarData(consulta.data)}</Text>
      <Text>{formatarValor(consulta.valor)}</Text>

      {consulta.status === "agendada" && (
        <>
          {onConfirmar && (
            <Button title="Confirmar" onPress={onConfirmar} />
          )}
          {onCancelar && (
            <Button title="Cancelar" onPress={onCancelar} />
          )}
        </>
      )}

      {consulta.status === "confirmada" && (
        <Text>✓ Consulta confirmada</Text>
      )}

      {consulta.status === "cancelada" && (
        <Text>✗ Consulta cancelada</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
  },
});