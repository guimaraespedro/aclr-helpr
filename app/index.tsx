import { Redirect } from "expo-router";
import { useSession } from "../hooks/useSession";

export default function Index() {
  const { session } = useSession();

  if (session === undefined) return null; // or splash screen

  return <Redirect href={session ? "/(authorized)/home" : "/sign-in"} />;
}
