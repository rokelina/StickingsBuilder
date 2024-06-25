// useAuth.ts
import { useContext } from 'react';
import AuthContext from '../context/authContext/authContext';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
