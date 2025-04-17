import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/colors";
import { useSession } from "../hooks/useSession";
import { router } from "expo-router";

export default function SignIn() {
  const { signIn } = useSession();

  return (
    <View>
      <Text>This is the Sign In page, edit that</Text>
      <TouchableOpacity
        onPress={() => {
          signIn("logged in!");
          router.replace("/(authorized)/home");
        }}
        style={{
          backgroundColor: colors.primary,
          borderRadius: 10,
          padding: 10,
          width: 200,
          height: 60,
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          signIn("logged in!");
        }}
        style={{
          backgroundColor: colors.primary,
          borderRadius: 10,
          padding: 10,
          width: 200,
          height: 60,
        }}
      >
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
