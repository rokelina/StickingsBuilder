import Button from '../../../components/Button/Button';
import UserDashboard from '../../../components/UserDashboard/UserDashboard';
import { useAuth } from '../../../context/authContext/useAuth';
import { CircularProgress } from '@mui/material';

const UserAccount = () => {
  const { authUser, isLoading, signOut } = useAuth();

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
          onBtnClick={signOut}
        ></Button>
      </div>
      <div className="account-content">
        <UserDashboard />
      </div>
    </div>
  );
};
export default UserAccount;
