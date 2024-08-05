import Login from './Login/Login';
import UserAccount from './UserAccount/UserAccount';
import { useAuth } from '../../context/authContext/useAuth';
import { CircularProgress } from '@mui/material';
import './MyAccount.css';

const MyAccount = () => {
  const { authUser, isLoading } = useAuth();

  return isLoading ? (
    <CircularProgress
      color="inherit"
      sx={{ marginLeft: '50%', marginTop: '25%' }}
    />
  ) : authUser ? (
    <UserAccount />
  ) : (
    <Login />
  );
};

export default MyAccount;
