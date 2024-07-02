import { ReactNode } from 'react';
import { AuthUserContext } from './AuthUserContext';
import { useFirebaseAuth } from './useFirebaseAuth';

type AuthUserProviderProps = {
  children: ReactNode;
};
export default function AuthUserProvider({ children }: AuthUserProviderProps) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}
