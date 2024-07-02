import { useContext } from 'react';
import { AuthUserContext } from './AuthUserContext';

export const useAuth = () => useContext(AuthUserContext);
