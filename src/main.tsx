import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthUserProvider from './context/authContext/AuthUserProvider';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router/router';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: 'eighth-notes', element: <EighthNotesMenu /> },
//       { path: 'triplet-notes', element: <TripletNotesMenu /> },
//       { path: 'random-stickings', element: <RandomNotesMenu /> },
//       {
//         path: 'user-account',
//         element: <MyAccount />,
//         children: [
//           { path: 'login', element: <Login /> },
//           { path: 'logged-user', element: <UserAccount /> },
//         ],
//       },
//       { path: 'about', element: <About /> },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <React.StrictMode>
      <AuthUserProvider>
        <RouterProvider router={router} />
      </AuthUserProvider>
    </React.StrictMode>
  </>
);
