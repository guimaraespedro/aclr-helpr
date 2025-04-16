import { Stack } from "expo-router";
import { colors } from "../constants/colors";
import { SessionProvider } from "../hooks/useSession";

export default function Root() {
  return (
    <SessionProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        initialRouteName="sign-in"
      >
        <Stack.Screen
          name="sign-in"
          options={{ headerShown: true, headerTitle: "Sign in" }}
        />
        <Stack.Screen
          name="sign-up"
          options={{ headerShown: true, headerTitle: "Sign up" }}
        ></Stack.Screen>
      </Stack>
    </SessionProvider>
  );
}
