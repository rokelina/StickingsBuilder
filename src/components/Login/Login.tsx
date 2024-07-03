import { useEffect } from 'react';
import { auth } from '../../firebase/firebaseConfig';
import { EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

const Login = () => {
  useEffect(() => {
    const uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        { provider: GoogleAuthProvider.PROVIDER_ID },
        {
          provider: EmailAuthProvider.PROVIDER_ID,
        },
      ],
    };

    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    // The start method will wait until the DOM is loaded to render the auth UI
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <div
      id="firebaseui-auth-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
      }}
    ></div>
  );
};

export default Login;
