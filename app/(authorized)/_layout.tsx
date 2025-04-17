import { Redirect, Tabs } from "expo-router";
import { useSession } from "../../hooks/useSession";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

export default function AppLayout() {
  const { session } = useSession();

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  if (session === undefined) {
    return null; // or a spinner
  }

  return (
    <Tabs
      screenOptions={() => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",
        headerShown: true,
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          title: "Home",
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          title: "Profile",
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
        }}
      />
    </Tabs>
  );
}
