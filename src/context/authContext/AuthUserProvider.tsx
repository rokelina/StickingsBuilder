import { ReactNode } from 'react';
import { useFirebaseAuth, AuthUserContext } from './authContext';

type AuthUserProviderProps = {
  children: ReactNode;
};
export default function AuthUserProvider({ children }: AuthUserProviderProps) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}
