import { createContext, useState, useContext, useEffect } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

type AuthUserContextType = {
  authUser: { uid: string; email: string | null; name: string | null } | null;
  isLoading: boolean;
};

export const AuthUserContext = createContext<AuthUserContextType>({
  authUser: null,
  isLoading: true,
});

export function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<{
    uid: string;
    email: string | null;
    name: string | null;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const authStateChanged = async (user: User | null) => {
    setIsLoading(true);
    if (!user) {
      setAuthUser(null);
      setIsLoading(false);
      return;
    }
    setAuthUser({ uid: user.uid, email: user.email, name: user.displayName });
    setIsLoading(false);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    isLoading,
  };
}

export const useAuth = () => useContext(AuthUserContext);
