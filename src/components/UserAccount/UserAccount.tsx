import { useAuth } from '../../context/authContext/useAuth';
// import { useMetronome } from '../../hooks/useMetronome';
// import { Samples } from '../../hooks/useSamples';
import Button from '../Button/Button';
// import MetronomeControls from '../MetronomeControls/MetronomeControls';
import SavedStickingsAndDrills from './SavedStickings';
import { CircularProgress } from '@mui/material';
// import { useFetchStickings } from '../../hooks/useFetchStickings';
// import { MenuId } from '../../App';

// type UserAccountProps = {
//   samples: Samples;
// };

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
