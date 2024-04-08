import MenuIcon from '../Icons/MenuIcon';
import EightNotesIcon from '../Icons/EightNotesIcon';
import RandomIcon from '../Icons/RandomIcon';
import TripletsIcon from '../Icons/TripletsIcon';
import SaveIcon from '../Icons/SaveIcon';
import AboutIcon from '../Icons/AboutIcon';
import LogInIcon from '../Icons/LogInIcon';
import ListItem from './ListItem/ListItem';
import './SideNavBar.css';

interface Props {
  onNavClick: (id: string) => void;
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
          ariaLabel="log in button"
          idName="log-in"
          icon={<LogInIcon />}
          spanText="Log In"
          onNavClick={onNavClick}
        />
        <ListItem
          ariaLabel="saved stickings menu"
          idName="saved-stickings"
          icon={<SaveIcon />}
          spanText="Saved Stickings"
          onNavClick={onNavClick}
        />
      </ul>
      <ul className="navbar-nav" style={{ flex: 0 }}>
        <ListItem
          ariaLabel="about this application"
          idName="about"
          icon={<AboutIcon />}
          spanText="About"
          onNavClick={onNavClick}
        />
      </ul>
    </nav>
  );
}

export default SideNavBar;
