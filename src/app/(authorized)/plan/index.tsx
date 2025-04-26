import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Card
        onPress={() => {}}
        title="My exercise programs"
        description="Create and manage your exercises"
        buttonText="Go to my programs"
      ></Card>
    </View>
  );
}

interface CardProps {
  onPress: () => void;
  title: string;
  buttonText: string;
  description: string;
}

const Card = ({ onPress, title, buttonText, description }: CardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <TouchableOpacity style={styles.cardButton} onPress={onPress}>
        <Text style={{ color: colors.text_primary }}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.dark_background,
    gap: 16,
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
  cardContainer: {
    padding: 16,
    backgroundColor: colors.dark_surface,
    borderRadius: 10,
    gap: 16,
  },
  cardButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text_primary,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.text_primary,
  },
});
