import { Redirect, Stack } from "expo-router";
import { colors } from "../../constants/colors";
import { SessionProvider } from "../../hooks/useSession";

export default function PublicLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
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
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: true,
          headerTitle: "Sign in",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: true,
          headerTitle: "Sign up",
          headerBackVisible: false,
        }}
      ></Stack.Screen>
    </Stack>
  );
}
