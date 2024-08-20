import UserDashboard from '../../components/UserDashboard/UserDashboard';
import Redirect from '../Redirect/Redirect';
import AccountHeader from './AccountHeader/AccountHeader';

import { useAuth } from '../../context/authContext/useAuth';
import { useNavigate } from 'react-router';

import { CircularProgress } from '@mui/material';
import './Account.css';

const Account = () => {
  const { authUser, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/login', { replace: true });
    signOut();
  };

  return isLoading ? (
    <CircularProgress color="inherit" sx={{ marginTop: '25%' }} />
  ) : authUser ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <AccountHeader authUser={authUser} onSignOut={handleSignOut} />
      <div className="account-content">
        <UserDashboard />
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};
export default Account;
