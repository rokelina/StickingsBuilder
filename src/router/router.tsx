import App from '../App';
import MyAccount from '../components/MyAccount/MyAccount';
import ErrorPage from '../routes/ErrorPage/ErrorPage';
import About from '../routes/About/About';
import EighthNotesMenu from '../routes/EighthNotesMenu/EighthNotesMenu';
import TripletNotesMenu from '../routes/TripletNotesMenu/TripletNotesMenu';
import RandomNotesMenu from '../routes/RandomNotesMenu/RandomNotesMenu';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: routes.eighths, element: <EighthNotesMenu /> },
      { path: routes.triplets, element: <TripletNotesMenu /> },
      { path: routes.random, element: <RandomNotesMenu /> },
      { path: routes.account, element: <MyAccount /> },
      { path: routes.about, element: <About /> },
    ],
  },
]);
