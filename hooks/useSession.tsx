import { createContext, PropsWithChildren, useContext, useState } from "react";

interface AuthContextProps {
  signIn: (session: string) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);
  const [session, setSession] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        signIn: (session: string) => {
          setSession(session);
          setIsLoading(false);
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
