import EightNotesIcon from '../../assets/icons/EightNotesIcon';
import RandomIcon from '../../assets/icons/RandomIcon';
import TripletsIcon from '../../assets/icons/TripletsIcon';
import SaveIcon from '../../assets/icons/SaveIcon';
import LiComponent from './LiComponent/LiComponent';
import './SideNavBar.css';

interface Props {
  onNavClick: (id: string) => void;
}

function SideNavBar({ onNavClick }: Props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <LiComponent
          idName="eighth-notes"
          icon={<EightNotesIcon></EightNotesIcon>}
          spanText="8th Notes"
          onNavClick={onNavClick}
        />
        <LiComponent
          idName="triplet-notes"
          icon={<TripletsIcon></TripletsIcon>}
          spanText="8th Notes Triplets"
          onNavClick={onNavClick}
        />
        <LiComponent
          idName="random-stickings"
          icon={<RandomIcon></RandomIcon>}
          spanText="Random Stickings"
          onNavClick={onNavClick}
        />
        <LiComponent
          idName="saved-stickings"
          icon={<SaveIcon />}
          spanText="Saved Stickings"
          onNavClick={onNavClick}
        />
      </ul>
    </nav>
  );
}

export default SideNavBar;
