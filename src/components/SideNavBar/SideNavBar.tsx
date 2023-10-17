import MenuIcon from '../../assets/icons/MenuIcon';
import EightNotesIcon from '../../assets/icons/EightNotesIcon';
import RandomIcon from '../../assets/icons/RandomIcon';
import TripletsIcon from '../../assets/icons/TripletsIcon';
// import SaveIcon from '../../assets/icons/SaveIcon';
import LiComponent from './LiComponent/LiComponent';
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
        <LiComponent
          ariaLabel="eight notes menu"
          idName="eighth-notes"
          icon={<EightNotesIcon />}
          spanText="8th Notes"
          onNavClick={onNavClick}
        />
        <LiComponent
          ariaLabel="eight note triplets menu"
          idName="triplet-notes"
          icon={<TripletsIcon />}
          spanText="8th Notes Triplets"
          onNavClick={onNavClick}
        />
        <LiComponent
          ariaLabel="random stickings menu"
          idName="random-stickings"
          icon={<RandomIcon />}
          spanText="Random Stickings"
          onNavClick={onNavClick}
        />
        {/* <LiComponent
          idName="saved-stickings"
          icon={<SaveIcon />}
          spanText="Saved Stickings"
          onNavClick={onNavClick}
        /> */}
      </ul>
    </nav>
  );
}

export default SideNavBar;
