// AuthContext.ts
import { createContext, Context } from 'react';
import { User } from 'firebase/auth';

interface AuthContextType {
  currentUser: User | null;
}

// Explicitly stating the context could be undefined initially
const AuthContext: Context<AuthContextType | undefined> = createContext<
  AuthContextType | undefined
>(undefined);

export default AuthContext;
