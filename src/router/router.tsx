import App from '../App';
import MyAccount from '../pages/MyAccount/MyAccount';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import About from '../pages/About/About';
import EighthNotesMenu from '../pages/EighthNotesMenu/EighthNotesMenu';
import TripletNotesMenu from '../pages/TripletNotesMenu/TripletNotesMenu';
import RandomNotesMenu from '../pages/RandomNotesMenu/RandomNotesMenu';
import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import MenuLayout from '../pages/MenuLayout/MenuLayout';
import RedirectToEighths from '../pages/RedirectToEighths/RedirectToEighths';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <RedirectToEighths /> },
      { path: '*', element: <RedirectToEighths /> },
      { path: '/menu', element: <RedirectToEighths /> },
      {
        path: routes.menu,
        element: <MenuLayout />,
        children: [
          { path: routes.eighths, element: <EighthNotesMenu /> },
          { path: routes.triplets, element: <TripletNotesMenu /> },
          { path: routes.random, element: <RandomNotesMenu /> },
        ],
      },
      { path: routes.account, element: <MyAccount /> },
      { path: routes.about, element: <About /> },
    ],
  },
]);
