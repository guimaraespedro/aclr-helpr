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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "home") {
            iconName = "home";
          } else if (route.name === "profile") {
            iconName = "person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",
        headerShown: true,
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
        }}
      />
    </Tabs>
  );
}
