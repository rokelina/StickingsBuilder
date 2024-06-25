// AuthProvider.tsx
import { ReactNode } from 'react';
import { AuthUserContext } from './authContext';
import useFirebaseAuth from './authContext';

interface AuthUserProviderProps {
  children: ReactNode;
}
export default function AuthUserProvider({ children }: AuthUserProviderProps) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}
