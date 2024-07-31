import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthUserProvider from './context/authContext/AuthUserProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <React.StrictMode>
      <AuthUserProvider>
        <RouterProvider router={router} />
      </AuthUserProvider>
    </React.StrictMode>
  </>
);
