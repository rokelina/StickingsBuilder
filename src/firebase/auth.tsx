import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { User } from 'firebase/auth';
import { auth } from './firebaseConfig';

interface AuthUserContextType {
  authUser: User | null;
  isLoading: boolean;
}

const AuthUserContext = createContext<AuthUserContextType>({
  authUser: null,
  isLoading: true,
});
export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  return {
    authUser,
    isLoading,
  };
}

interface AuthUserProviderProps {
  children: ReactNode;
}
export function AuthUserProvider({ children }: AuthUserProviderProps) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}

export const useAuth = () => useContext(AuthUserContext);
