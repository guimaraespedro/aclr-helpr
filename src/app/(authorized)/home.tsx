import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardText}>Measure Knee Angle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardText}>Create My Exercise Program</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.dark_background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardButton: {
    backgroundColor: colors.dark_surface,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text_primary,
  },
});
