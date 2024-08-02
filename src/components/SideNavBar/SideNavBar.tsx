import MenuIcon from '../Icons/MenuIcon';
import EightNotesIcon from '../Icons/EightNotesIcon';
import RandomIcon from '../Icons/RandomIcon';
import TripletsIcon from '../Icons/TripletsIcon';
import AboutIcon from '../Icons/AboutIcon';
import { MdAccountBox } from 'react-icons/md';
import ListItem from './ListItem/ListItem';
import './SideNavBar.css';

export type RouteId =
  | 'eighth-notes'
  | 'triplet-notes'
  | 'random-stickings'
  | 'user-account'
  | 'about';

function SideNavBar() {
  return (
    <nav className="navbar">
      <div className="menu-icon">
        <MenuIcon />
      </div>
      <ul className="navbar-nav">
        <ListItem
          ariaLabel="eight notes menu"
          idName="eighth-notes"
          icon={<EightNotesIcon />}
          spanText="8th Notes"
        />
        <ListItem
          ariaLabel="eight note triplets menu"
          idName="triplet-notes"
          icon={<TripletsIcon />}
          spanText="8th Notes Triplets"
        />
        <ListItem
          ariaLabel="random stickings menu"
          idName="random-stickings"
          icon={<RandomIcon />}
          spanText="Random Stickings"
        />
        <ListItem
          ariaLabel="sign in to your account"
          idName="user-account"
          icon={<MdAccountBox size={'2.5rem'} opacity={'0'} color="white" />}
          spanText="My Account"
        />
        <ListItem
          ariaLabel="about this app"
          idName="about"
          icon={<AboutIcon />}
          spanText="About"
        />
      </ul>
    </nav>
  );
}

export default SideNavBar;
