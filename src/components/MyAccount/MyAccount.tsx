import { useAuth } from '../../context/authContext/useAuth';
import Login from '../Login/Login';
import UserAccount from '../UserAccount/UserAccount';
import './MyAccount.css';

const MyAccount = () => {
  const { authUser } = useAuth();

  return authUser ? <UserAccount /> : <Login />;
};

export default MyAccount;
