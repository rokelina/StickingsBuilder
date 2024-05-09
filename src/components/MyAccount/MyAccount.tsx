import { auth } from '../../firebase/firebaseConfig';
// import { onAuthStateChanged } from 'firebase/auth';
import Login from '../Login/Login';
import './MyAccount.css';
import UserAccount from '../UserAccount/UserAccount';
import { useState } from 'react';
import { MenuId } from '../../App';

interface Props {
  displayMenu: MenuId;
}

const MyAccount = ({ displayMenu }: Props) => {
  const [isLoggedOut, setLoggedOut] = useState(false);

  const handleLogOut = () => {
    auth.signOut();
    setLoggedOut(true);
  };
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(`Welcome ${auth.currentUser?.displayName}`);
  //   } else {
  //     console.log('No user logged in');
  //   }
  // });
  // const docRef = doc(db, 'temp');

  return auth.currentUser && !isLoggedOut ? (
    <UserAccount onLogOut={handleLogOut} />
  ) : (
    <Login displayMenu={displayMenu} />
  );
};

export default MyAccount;
