import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthUserProvider from './context/authContext/AuthUserProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MyAccount from './components/MyAccount/MyAccount';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: 'account', element: <MyAccount /> }],
    errorElement: <ErrorPage />,
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
