import { Redirect, Stack } from "expo-router";
import { useSession } from "../../hooks/useSession";

export default function AppLayout() {
  const { session } = useSession();

  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  return <Stack />;
}
