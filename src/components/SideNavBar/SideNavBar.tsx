import EightNotesIcon from '../../assets/icons/EightNotesIcon';
import RandomIcon from '../../assets/icons/RandomIcon';
import TripletsIcon from '../../assets/icons/TripletsIcon';
// import NavBar from '../NavBar/NavBar';
import LiComponent from './LiComponent';
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
      </ul>
    </nav>
  );
}

export default SideNavBar;
