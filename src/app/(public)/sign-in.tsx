import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../constants/colors";
import { useSession } from "../../../hooks/useSession";
import { router } from "expo-router";

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 20,
          paddingBottom: 100,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            signIn("logged in!");
            router.navigate("/(authorized)/home");
          }}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 10,
            padding: 10,
            height: 60,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("not implemented yet...")}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 10,
            padding: 10,
            height: 60,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
