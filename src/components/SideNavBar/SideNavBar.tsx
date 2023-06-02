import EightNotesIcon from '../../assets/icons/EightNotesIcon';
import RandomIcon from '../../assets/icons/RandomIcon';
import TripletsIcon from '../../assets/icons/TripletsIcon';
import NavBar from '../NavBar/NavBar';
import LiComponent from './LiComponent';
import './SideNavBar.css';

function SideNavBar() {
  return (
    <NavBar classname="navbar">
      <ul className="navbar-nav">
        <LiComponent
          idName="eighth-notes"
          icon={<EightNotesIcon></EightNotesIcon>}
          spanText="8th Notes"
        />
        <LiComponent
          idName="triplet-notes"
          icon={<TripletsIcon></TripletsIcon>}
          spanText="8th Notes Triplets"
        />
        <LiComponent
          idName="random-stickings"
          icon={<RandomIcon></RandomIcon>}
          spanText="Random Stickings"
        />
      </ul>
    </NavBar>
  );
}

export default SideNavBar;
