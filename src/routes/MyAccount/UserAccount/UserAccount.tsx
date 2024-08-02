import { useAuth } from '../../../context/authContext/useAuth';
import SavedStickingsAndDrills from '../../../components/UserAccount/SavedStickings';
import Button from '../../../components/Button/Button';
import { CircularProgress } from '@mui/material';

const UserAccount = () => {
  const { authUser, isLoading, signOut } = useAuth();

  return isLoading ? (
    <CircularProgress
      color="inherit"
      sx={{ marginLeft: '50%', marginTop: '30%' }}
    />
  ) : (
    <>
      <div className="account-menu">
        <h4 className="welcome-message">Welcome, {authUser?.name}!</h4>
        <Button
          idName="sign-out-btn"
          children="Sign Out"
          onBtnClick={signOut}
        ></Button>
      </div>
      <div className="account-content">
        <SavedStickingsAndDrills />
      </div>
    </>
  );
};
export default UserAccount;
