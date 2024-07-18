import { useAuth } from '../../context/authContext/useAuth';
// import { useMetronome } from '../../hooks/useMetronome';
// import { Samples } from '../../hooks/useSamples';
import Button from '../Button/Button';
// import MetronomeControls from '../MetronomeControls/MetronomeControls';
import SavedStickings from './SavedStickings/SavedStickings';
// import { useFetchStickings } from '../../hooks/useFetchStickings';
// import { MenuId } from '../../App';

// type UserAccountProps = {
//   samples: Samples;
// };

const UserAccount = () => {
  const { authUser, signOut } = useAuth();

  return (
    <>
      <div className="account-menu">
        <h4 className="welcome-message">Welcome, {authUser?.name}!</h4>
        <Button
          idName="sign-out-btn"
          children="Sign Out"
          onBtnClick={signOut}
        ></Button>
      </div>
      <SavedStickings />
    </>
  );
};
export default UserAccount;
