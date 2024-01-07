import {
  PropsWithChildren,
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import {
  signOut as signOutFirebase,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";

import {
  setUser as setUserStorage,
  clearTokens,
  setToken,
  getToken,
  getUser,
} from "../services/authGoogleStore";
import { auth } from "../services/firebaseConn";

const provider = new GoogleAuthProvider();

interface AuthContextProps {
  user: User | null;
  signed: boolean;
  signInWithGoogle: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  signed: false,
  signInWithGoogle: () => {},
  signOut: () => {},
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const handleError = useCallback(
    (error: { code: number; message: string }) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage, errorCode);
    },
    []
  );

  const signInWithGoogle = useCallback(() => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        if (token && user) {
          setUser(user);

          setToken(token);
          setUserStorage(user);
        }
      })
      .catch((error) => handleError(error));
  }, [handleError]);

  const signOut = useCallback(() => {
    signOutFirebase(auth)
      .then(() => {
        clearTokens();
        setUser(null);
      })
      .catch((error) => handleError(error));
  }, [handleError]);

  useEffect(() => {
    const loadStoreAuth = () => {
      const sessionToken = getToken();
      const sessionUser = getUser();

      if (sessionToken && sessionUser) {
        setUser(sessionUser);
      }
    };

    loadStoreAuth();
  }, []);

  const value = useMemo(
    () => ({
      user,
      signed: !!user,
      signInWithGoogle,
      signOut,
    }),
    [signInWithGoogle, signOut, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
