import { createContext } from 'react';

export type AuthUser = {
  uid: string;
  email: string | null;
  name: string | null;
} | null;

type AuthUserContextType = {
  authUser: AuthUser;
  isLoading: boolean;
  signOut: () => Promise<void>;
};

export const AuthUserContext = createContext<AuthUserContextType>({
  authUser: null,
  isLoading: true,
  signOut: async () => Promise.resolve(),
});
