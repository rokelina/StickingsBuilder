import Button from '../../../components/Button/Button';
import UserDashboard from '../../../components/UserDashboard/UserDashboard';
import { useAuth } from '../../../context/authContext/useAuth';
import { CircularProgress } from '@mui/material';
import '../MyAccount.css';
import { useNavigate } from 'react-router';

const UserAccount = () => {
  const { authUser, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/login', { replace: true });
    signOut();
  };
  return isLoading ? (
    <CircularProgress
      color="inherit"
      sx={{ marginLeft: '50%', marginTop: '30%' }}
    />
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <div className="account-menu">
        <h4 className="welcome-message">Welcome, {authUser?.name}!</h4>
        <Button
          idName="sign-out-btn"
          children="Sign Out"
          onBtnClick={handleSignOut}
        ></Button>
      </div>
      <div className="account-content">
        <UserDashboard />
      </div>
    </div>
  );
};
export default UserAccount;
