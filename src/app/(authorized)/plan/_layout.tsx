import { Stack } from "expo-router";
import { colors } from "../../../../constants/colors";
import { View } from "react-native";

export default function AppLayout() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.dark_background,
      }}
    >
      <Stack
        screenOptions={{
          headerBackButtonDisplayMode: "minimal",
          headerShown: true,
          headerTintColor: colors.text_primary,
          headerStyle: {
            backgroundColor: colors.dark_background,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerTitleAlign: "center",
          }}
        />
      </Stack>
    </View>
  );
}
