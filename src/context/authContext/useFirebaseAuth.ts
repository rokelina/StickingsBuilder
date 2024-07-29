import { useState, useEffect } from 'react';
import {
  User,
  onAuthStateChanged,
  signOut as authSignOut,
} from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { addUserToDatabase } from '../../firebase/firestore';

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

    await addUserToDatabase(user);
  };

  const signOut = () => authSignOut(auth).then(clear);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    isLoading,
    signOut,
  };
}
