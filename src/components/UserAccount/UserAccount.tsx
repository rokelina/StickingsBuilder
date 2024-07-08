import { useAuth } from '../../context/authContext/useAuth';
import { Samples } from '../../hooks/useSamples';
import Button from '../Button/Button';

type UserAccountProps = {
  samples: Samples;
};

const UserAccount = ({ samples }: UserAccountProps) => {
  const { authUser, signOut } = useAuth();

  return (
    <div className="account-menu">
      <h2 className="welcome-message">Welcome {authUser?.name}!</h2>
      <Button
        idName="sign-out-btn"
        children="Sign Out"
        onBtnClick={signOut}
      ></Button>
    </div>
  );
};
export default UserAccount;
