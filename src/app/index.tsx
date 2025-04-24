import { Redirect } from "expo-router";
import { useSession } from "../../hooks/useSession";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { session } = useSession();

  // Show a loading indicator while session is undefined
  if (session === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Redirect based on session state
  return (
    <Redirect href={session ? "/(authorized)/home" : "/(public)/sign-in"} />
  );
}
