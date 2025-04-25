import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Profile Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark_background,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text_primary,
  },
});
