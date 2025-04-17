import { Slot } from "expo-router";
import { SessionProvider } from "../hooks/useSession";

export default function RootLayout() {
  return (
    <SessionProvider>
      <Slot></Slot>
    </SessionProvider>
  );
}
