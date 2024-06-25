import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import { User } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';

interface AuthUserContextType {
  authUser: User | null;
  isLoading: boolean;
}

export const AuthUserContext = createContext<AuthUserContextType>({
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

export const useAuth = () => useContext(AuthUserContext);
