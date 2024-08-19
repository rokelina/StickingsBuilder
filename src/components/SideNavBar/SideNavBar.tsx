import MenuIcon from '../Icons/MenuIcon';
import EightNotesIcon from '../Icons/EightNotesIcon';
import RandomIcon from '../Icons/RandomIcon';
import TripletsIcon from '../Icons/TripletsIcon';
import AboutIcon from '../Icons/AboutIcon';
import ListItem from './ListItem/ListItem';
import { useAuth } from '../../context/authContext/useAuth';
import { routes } from '../../router/routes';

import { MdAccountBox } from 'react-icons/md';
import './SideNavBar.css';

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
          routeName={`${routes.menu}/${routes.eighths}`}
          icon={<EightNotesIcon />}
          spanText="8th Notes"
        />
        <ListItem
          ariaLabel="eight note triplets menu"
          routeName={`${routes.menu}/${routes.triplets}`}
          icon={<TripletsIcon />}
          spanText="8th Notes Triplets"
        />
        <ListItem
          ariaLabel="random stickings menu"
          routeName={`${routes.menu}/${routes.random}`}
          icon={<RandomIcon />}
          spanText="Random Stickings"
        />
        <ListItem
          ariaLabel="sign in to your account"
          routeName={authUser ? `${routes.account}` : `${routes.login}`}
          icon={<MdAccountBox size={'2.5rem'} opacity={'0'} color="white" />}
          spanText="My Account"
        />
        <ListItem
          ariaLabel="about this app"
          routeName={`${routes.about}`}
          icon={<AboutIcon />}
          spanText="About"
        />
      </ul>
    </nav>
  );
}

export default SideNavBar;
