import App from '../App';
import MyAccount from '../components/MyAccount/MyAccount';
import ErrorPage from '../routes/ErrorPage/ErrorPage';
import Login from '../routes/Login/Login';
import UserAccount from '../components/UserAccount/UserAccount';
import About from '../routes/About/About';
import EighthNotesMenu from '../routes/EighthNotesMenu/EighthNotesMenu';
import TripletNotesMenu from '../routes/TripletNotesMenu/TripletNotesMenu';
import RandomNotesMenu from '../routes/RandomNotesMenu/RandomNotesMenu';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'eighth-notes', element: <EighthNotesMenu /> },
      { path: 'triplet-notes', element: <TripletNotesMenu /> },
      { path: 'random-stickings', element: <RandomNotesMenu /> },
      {
        path: 'user-account',
        element: <MyAccount />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'logged-user', element: <UserAccount /> },
        ],
      },
      { path: 'about', element: <About /> },
    ],
  },
]);
