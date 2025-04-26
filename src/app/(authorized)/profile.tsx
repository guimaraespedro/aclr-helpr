import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../../constants/colors";
import { useSession } from "../../../hooks/useSession";

export default function ProfileScreen() {
  const { signOut } = useSession();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Profile Screen!</Text>
      <TouchableOpacity
        onPress={() => {
          signOut();
        }}
        style={{
          backgroundColor: colors.primary,
          borderRadius: 10,
          padding: 10,
          width: 200,
          height: 60,
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
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
