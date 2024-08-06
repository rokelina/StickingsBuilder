import { useEffect } from 'react';
import { auth } from '../../../firebase/firebaseConfig';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const Login = () => {
  useEffect(() => {
    const uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/user-account',
      signInOptions: [
        { provider: GoogleAuthProvider.PROVIDER_ID },
        {
          provider: EmailAuthProvider.PROVIDER_ID,
        },
      ],
    };

    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <div
      id="firebaseui-auth-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '75vh',
      }}
    ></div>
  );
};

export default Login;
