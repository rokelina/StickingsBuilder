import { useEffect } from 'react';
import { auth } from '../../firebase/firebaseConfig';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { MenuId } from '../../App';

interface Props {
  displayMenu: MenuId;
}

import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const Login = ({ displayMenu }: Props) => {
  useEffect(() => {
    const uiConfig = {
      callbacks: {},
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        { provider: GoogleAuthProvider.PROVIDER_ID },
        { provider: EmailAuthProvider.PROVIDER_ID },
      ],
    };

    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    // The start method will wait until the DOM is loaded to render the auth UI
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return displayMenu === 'user-account' ? (
    <div
      id="firebaseui-auth-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
      }}
    ></div>
  ) : (
    <div
      id="firebaseui-auth-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        opacity: 0.5,
      }}
    ></div>
  );
};

export default Login;
