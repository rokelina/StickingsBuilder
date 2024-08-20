import Button from '../../../components/Button/Button';
import { AuthUser } from '../../../context/authContext/AuthUserContext';
import './AccountHeader.css';

type Props = {
  authUser: AuthUser;
  onSignOut: () => void;
};
const AccountHeader = ({ authUser, onSignOut }: Props) => {
  return (
    <div className="account-header">
      <h4 className="welcome-message">Welcome, {authUser?.name}!</h4>
      <Button
        idName="sign-out-btn"
        children="Sign Out"
        onBtnClick={onSignOut}
      ></Button>
    </div>
  );
};
export default AccountHeader;
