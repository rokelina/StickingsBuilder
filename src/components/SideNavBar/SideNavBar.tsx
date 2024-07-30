import MenuIcon from '../Icons/MenuIcon';
import EightNotesIcon from '../Icons/EightNotesIcon';
import RandomIcon from '../Icons/RandomIcon';
import TripletsIcon from '../Icons/TripletsIcon';
// import AboutIcon from '../Icons/AboutIcon';
import MyAccountIcon from '../Icons/MyAccountIcon';
import ListItem from './ListItem/ListItem';
import './SideNavBar.css';
import { MenuId } from '../../App';

interface Props {
  onNavClick: (id: MenuId) => void;
}

function SideNavBar({ onNavClick }: Props) {
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
          onNavClick={onNavClick}
        />
        <ListItem
          ariaLabel="eight note triplets menu"
          idName="triplet-notes"
          icon={<TripletsIcon />}
          spanText="8th Notes Triplets"
          onNavClick={onNavClick}
        />
        <ListItem
          ariaLabel="random stickings menu"
          idName="random-stickings"
          icon={<RandomIcon />}
          spanText="Random Stickings"
          onNavClick={onNavClick}
        />
        <ListItem
          ariaLabel="account button"
          idName="user-account"
          icon={<MyAccountIcon />}
          spanText="My Account"
          onNavClick={onNavClick}
        />
      </ul>
      {/* <ul className="navbar-nav" style={{ flex: 0 }}>
        <ListItem
          ariaLabel="about this application"
          idName="about"
          icon={<AboutIcon />}
          spanText="About"
          onNavClick={onNavClick}
        />
      </ul> */}
    </nav>
  );
}

export default SideNavBar;
