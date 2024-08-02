import MenuIcon from '../Icons/MenuIcon';
import EightNotesIcon from '../Icons/EightNotesIcon';
import RandomIcon from '../Icons/RandomIcon';
import TripletsIcon from '../Icons/TripletsIcon';
import AboutIcon from '../Icons/AboutIcon';
import ListItem from './ListItem/ListItem';
import { RouteId } from '../../App';
import { NavLink } from 'react-router-dom';
import './SideNavBar.css';
import MyAccountIcon from '../Icons/MyAccountIcon';
import { MdAccountBox } from 'react-icons/md';

// interface Props {
//   onNavClick: (id: MenuId) => void;
// }

function SideNavBar() {
  return (
    <nav className="navbar">
      <div className="menu-icon">
        <MenuIcon />
      </div>
      <ul className="navbar-nav">
        <ListItem
          // ariaLabel="eight notes menu"
          idName="eighth-notes"
          icon={<EightNotesIcon />}
          spanText="8th Notes"
          // onNavClick={onNavClick}
        />
        <ListItem
          // ariaLabel="eight note triplets menu"
          idName="triplet-notes"
          icon={<TripletsIcon />}
          spanText="8th Notes Triplets"
          // onNavClick={onNavClick}
        />
        <ListItem
          // ariaLabel="random stickings menu"
          idName="random-stickings"
          icon={<RandomIcon />}
          spanText="Random Stickings"
          // onNavClick={onNavClick}
        />
        <ListItem
          // ariaLabel="account button"
          idName="user-account"
          icon={<MdAccountBox size={'2.5rem'} opacity={'0'} color="white" />}
          spanText="My Account"
          // onNavClick={onNavClick}
        />
        <ListItem
          // ariaLabel="about this app"
          idName="about"
          icon={<AboutIcon />}
          spanText="About"
          // onNavClick={onNavClick}
        />
      </ul>
    </nav>
  );
}

export default SideNavBar;
