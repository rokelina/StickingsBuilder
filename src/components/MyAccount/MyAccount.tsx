import { useAuth } from '../../context/authContext/useAuth';
// import { Samples } from '../../hooks/useSamples';
import Login from '../Login/Login';
import UserAccount from '../UserAccount/UserAccount';
import './MyAccount.css';

// type AccountProps = {
//   samples: Samples;
// };

const MyAccount = () => {
  const { authUser } = useAuth();

  return authUser ? <UserAccount /> : <Login />;
};

export default MyAccount;
