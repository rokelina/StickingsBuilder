import { createContext, useState, useContext, useEffect } from 'react';
import {
  User,
  onAuthStateChanged,
  signOut as authSignOut,
} from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

type AuthUserContextType = {
  authUser: {
    uid: string;
    email: string | null;
    name: string | null;
  } | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
};

export const AuthUserContext = createContext<AuthUserContextType>({
  authUser: null,
  isLoading: true,
  signOut: async () => Promise.resolve(),
});

export function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<{
    uid: string;
    email: string | null;
    name: string | null;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
  };

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

  const signOut = () => authSignOut(auth).then(clear);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    console.log('effect run');
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    isLoading,
    signOut,
  };
}

export const useAuth = () => useContext(AuthUserContext);
