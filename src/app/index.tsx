import { Redirect } from "expo-router";
import { useSession } from "../../hooks/useSession";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../../constants/colors";

export default function Index() {
  const { session } = useSession();

  // Show a loading indicator while session is undefined
  if (session === undefined) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.dark_background,
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Redirect based on session state
  return (
    <Redirect href={session ? "/(authorized)/home" : "/(public)/sign-in"} />
  );
}
