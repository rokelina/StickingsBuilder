import { createContext } from 'react';

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
