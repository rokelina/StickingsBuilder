import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthUserProvider from './context/authContext/AuthUserProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <React.StrictMode>
      <AuthUserProvider>
        <App />
      </AuthUserProvider>
    </React.StrictMode>
  </>
);
