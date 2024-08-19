import MenuIcon from '../Icons/MenuIcon';
import EightNotesIcon from '../Icons/EightNotesIcon';
import RandomIcon from '../Icons/RandomIcon';
import TripletsIcon from '../Icons/TripletsIcon';
import AboutIcon from '../Icons/AboutIcon';
import { MdAccountBox } from 'react-icons/md';
import ListItem from './ListItem/ListItem';
import './SideNavBar.css';
import { useAuth } from '../../context/authContext/useAuth';

// export type RouteId =
//   | 'menu/eighth-notes'
//   | 'menu/triplet-notes'
//   | 'menu/random-stickings'
//   | 'user-account'
//   | 'user-account'
//   | 'about';

function SideNavBar() {
  const { authUser } = useAuth();

  return (
    <nav className="navbar">
      <div className="menu-icon">
        <MenuIcon />
      </div>
      <ul className="navbar-nav">
        <ListItem
          ariaLabel="eight notes menu"
          routeName="menu/eighth-notes"
          icon={<EightNotesIcon />}
          spanText="8th Notes"
        />
        <ListItem
          ariaLabel="eight note triplets menu"
          routeName="menu/triplet-notes"
          icon={<TripletsIcon />}
          spanText="8th Notes Triplets"
        />
        <ListItem
          ariaLabel="random stickings menu"
          routeName="menu/random-stickings"
          icon={<RandomIcon />}
          spanText="Random Stickings"
        />
        <ListItem
          ariaLabel="sign in to your account"
          routeName={authUser ? 'user-account' : 'login'}
          icon={<MdAccountBox size={'2.5rem'} opacity={'0'} color="white" />}
          spanText="My Account"
        />
        <ListItem
          ariaLabel="about this app"
          routeName="about"
          icon={<AboutIcon />}
          spanText="About"
        />
      </ul>
    </nav>
  );
}

export default SideNavBar;
