import { useAuth } from '../../context/authContext/authContext';
import Button from '../Button/Button';

const UserAccount = () => {
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
