import { useAuth } from '../../context/authContext/authContext';
import { db } from '../../firebase/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import Button from '../Button/Button';

interface UserAccountProps {
  onLogOut: () => void;
}

const UserAccount = ({ onLogOut }: UserAccountProps) => {
  const { authUser } = useAuth();
  return (
    <div className="account-menu">
      <h2 className="welcome-message">Welcome {authUser?.name}!</h2>
      <Button
        idName="sign-out-btn"
        children="Sign Out"
        onBtnClick={onLogOut}
      ></Button>
    </div>
  );
};
export default UserAccount;
