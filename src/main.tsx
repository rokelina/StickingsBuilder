import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthUserProvider from './context/authContext/AuthUserProvider';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <React.StrictMode>
      <AuthUserProvider>
        <RouterProvider router={router} />
      </AuthUserProvider>
    </React.StrictMode>
  </>
);
