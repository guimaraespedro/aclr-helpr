import { Redirect, Tabs } from "expo-router";
import { useSession } from "../../../hooks/useSession";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../constants/colors";
import { StatusBar } from "react-native";

export default function AppLayout() {
  const { session } = useSession();

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  if (session === undefined) {
    return null; // or a spinner
  }

  return (
    <>
      <StatusBar
        backgroundColor={colors.dark_background} // Set to your desired color
        barStyle="light-content" // Use "light-content" for white text/icons
      />
      <Tabs
        screenOptions={() => ({
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: "white",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.dark_background,
            borderTopWidth: 0,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
          },
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="plan"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
