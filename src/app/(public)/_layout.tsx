import { Stack } from "expo-router";
import { colors } from "../../../constants/colors";
import { StatusBar } from "react-native";

export default function PublicLayout() {
  return (
    <>
      <StatusBar
        backgroundColor={colors.dark_background} // Set to your desired color
        barStyle="light-content" // Use "light-content" for white text/icons
      />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.dark_background,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShown: false,
          animation: "fade",
        }}
        initialRouteName="sign-in"
      >
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up"></Stack.Screen>
      </Stack>
    </>
  );
}
