import MenuIcon from '../Icons/MenuIcon';
import EightNotesIcon from '../Icons/EightNotesIcon';
import RandomIcon from '../Icons/RandomIcon';
import TripletsIcon from '../Icons/TripletsIcon';
import SaveIcon from '../Icons/SaveIcon';
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
          ariaLabel="saved stickings menu"
          idName="saved-stickings"
          icon={<SaveIcon />}
          spanText="Saved Stickings"
          onNavClick={onNavClick}
        />
      </ul>
      <ul className="navbar-nav" style={{ flex: 0 }}>
        <li className="nav-item" id="log-in">
          <button
            className="nav-link"
            aria-label="log in button"
            onClick={() => console.log('log in clicked')}
          >
            {<SaveIcon />}
            <span className="icon-text">Log In</span>
          </button>
        </li>
        <li className="nav-item" id="about">
          <button
            className="nav-link"
            aria-label="about this application"
            onClick={() => console.log('about clicked')}
          >
            {<RandomIcon />}
            <span className="icon-text">About</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default SideNavBar;
